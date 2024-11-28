/*
  Warnings:

  - You are about to drop the `_historialtousuarios` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoria_id` to the `Receta` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_historialtousuarios` DROP FOREIGN KEY `_HistorialToUsuarios_A_fkey`;

-- DropForeignKey
ALTER TABLE `_historialtousuarios` DROP FOREIGN KEY `_HistorialToUsuarios_B_fkey`;

-- AlterTable
ALTER TABLE `receta` ADD COLUMN `categoria_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_historialtousuarios`;

-- AddForeignKey
ALTER TABLE `Receta` ADD CONSTRAINT `Receta_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `Categoria`(`id_categoria`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Historial` ADD CONSTRAINT `Historial_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `Usuarios`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;
