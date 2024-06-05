sudo rm -r Migrations
sudo rm mydatabase.db
touch mydatabase.db
dotnet ef migrations add InitDB
dotnet ef database update