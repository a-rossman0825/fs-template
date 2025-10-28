#!/bin/bash
# Usage: From project root folder:  ./scripts/migrate.sh MigrationName

if [ -z "$1" ]; then
  echo "please provide a migration name."
  exit 1
fi

cd "$(dirname "$0")/../server" || exit 1

dotnet ef migrations add "$1"
dotnet ef database update