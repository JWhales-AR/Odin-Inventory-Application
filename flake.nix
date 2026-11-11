{
  description = "Devshell Declaration";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = {nixpkgs, ...}: let
    system = "x86_64-linux";
    pkgs = import nixpkgs { inherit system; };
    upSql = pkgs.writeShellScriptBin "upsql" ''
      ${pkgs.docker}/bin/docker compose up -d
    '';
    downSql = pkgs.writeShellScriptBin "downsql" ''
      ${pkgs.docker}/bin/docker compose down --timeout 3
    '';
    connectSql = pkgs.writeShellScriptBin "connsql" ''
      ${pkgs.pgcli}/bin/pgcli --user root --host localhost --dbname testing
    '';
  in {
    devShells.${system} = {
      default = pkgs.mkShell {
        packages = with pkgs; [
          pgcli
          upSql downSql connectSql
        ];
      };
    };
  };
}
