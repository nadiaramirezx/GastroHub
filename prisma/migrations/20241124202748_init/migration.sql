-- CreateTable
CREATE TABLE `Usuarios` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `foto_perfil` VARCHAR(191) NULL,
    `fecha_registro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Usuarios_email_key`(`email`),
    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recetario` (
    `id_recetario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NULL,
    `fecha_creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `usuario_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_recetario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Receta` (
    `id_receta` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,
    `archivo` VARCHAR(191) NOT NULL,
    `fecha_creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `recetario_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_receta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `id_categoria` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Historial` (
    `id_historial` INTEGER NOT NULL AUTO_INCREMENT,
    `accion` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `usuario_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_historial`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_HistorialToUsuarios` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_HistorialToUsuarios_AB_unique`(`A`, `B`),
    INDEX `_HistorialToUsuarios_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Recetario` ADD CONSTRAINT `Recetario_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `Usuarios`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Receta` ADD CONSTRAINT `Receta_recetario_id_fkey` FOREIGN KEY (`recetario_id`) REFERENCES `Recetario`(`id_recetario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HistorialToUsuarios` ADD CONSTRAINT `_HistorialToUsuarios_A_fkey` FOREIGN KEY (`A`) REFERENCES `Historial`(`id_historial`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HistorialToUsuarios` ADD CONSTRAINT `_HistorialToUsuarios_B_fkey` FOREIGN KEY (`B`) REFERENCES `Usuarios`(`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
