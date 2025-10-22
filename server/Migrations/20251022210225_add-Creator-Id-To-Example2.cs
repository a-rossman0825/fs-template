using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class addCreatorIdToExample2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "creatorId",
                table: "Examples",
                newName: "CreatorId");

            migrationBuilder.AlterColumn<string>(
                name: "CreatorId",
                table: "Examples",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CreatorId",
                table: "Examples",
                newName: "creatorId");

            migrationBuilder.UpdateData(
                table: "Examples",
                keyColumn: "creatorId",
                keyValue: null,
                column: "creatorId",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "creatorId",
                table: "Examples",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }
    }
}
