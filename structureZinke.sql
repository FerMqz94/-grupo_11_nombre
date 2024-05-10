-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
-- -----------------------------------------------------
-- Schema zinke_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema zinke_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `zinke_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`colors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`colors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `hexadecimal` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `description` TEXT NOT NULL,
  `featuredDescription` VARCHAR(50) NOT NULL,
  `price` DECIMAL(6,2) NOT NULL,
  `new` INT NOT NULL DEFAULT '0',
  `sale` INT NOT NULL DEFAULT '0',
  `available` INT NOT NULL DEFAULT '1',
  `id_category` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_categories_idx` (`id_category` ASC) VISIBLE,
  CONSTRAINT `fk_product_category`
    FOREIGN KEY (`id_category`)
    REFERENCES `mydb`.`categories` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `id_product` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_image_product_idx` (`id_product` ASC) VISIBLE,
  CONSTRAINT `fk_image_product`
    FOREIGN KEY (`id_product`)
    REFERENCES `mydb`.`products` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`sizes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`sizes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`products_sizes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`products_sizes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_product` INT NOT NULL,
  `id_size` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_idx` (`id_product` ASC) VISIBLE,
  INDEX `fk_size_idx` (`id_size` ASC) VISIBLE,
  CONSTRAINT `fk_product`
    FOREIGN KEY (`id_product`)
    REFERENCES `mydb`.`products` (`id`),
  CONSTRAINT `fk_size`
    FOREIGN KEY (`id_size`)
    REFERENCES `mydb`.`sizes` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

USE `zinke_db` ;

-- -----------------------------------------------------
-- Table `zinke_db`.`banners`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zinke_db`.`banners` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:42',
  `updatedAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:42',
  `deletedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zinke_db`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zinke_db`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:41',
  `updatedAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:41',
  `deletedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zinke_db`.`colors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zinke_db`.`colors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `hexadecimal` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:41',
  `updatedAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:41',
  `deletedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zinke_db`.`rols`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zinke_db`.`rols` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:42',
  `updatedAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:42',
  `deletedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zinke_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zinke_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `username` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `id_rol` INT NULL DEFAULT '1',
  `avatar` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:42',
  `updatedAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:42',
  `deletedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_rol` (`id_rol` ASC) VISIBLE,
  CONSTRAINT `users_ibfk_1`
    FOREIGN KEY (`id_rol`)
    REFERENCES `zinke_db`.`rols` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zinke_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zinke_db`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `featuredDescription` TEXT NULL DEFAULT NULL,
  `price` DECIMAL(10,0) NULL DEFAULT NULL,
  `new` TINYINT(1) NULL DEFAULT NULL,
  `sale` TINYINT(1) NULL DEFAULT NULL,
  `available` TINYINT(1) NULL DEFAULT NULL,
  `id_category` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:41',
  `updatedAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:41',
  `deletedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_category` (`id_category` ASC) VISIBLE,
  CONSTRAINT `products_ibfk_1`
    FOREIGN KEY (`id_category`)
    REFERENCES `zinke_db`.`categories` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zinke_db`.`favorites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zinke_db`.`favorites` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_user` INT NULL DEFAULT NULL,
  `id_product` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:42',
  `updatedAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:42',
  `deletedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_user` (`id_user` ASC) VISIBLE,
  INDEX `id_product` (`id_product` ASC) VISIBLE,
  CONSTRAINT `favorites_ibfk_1`
    FOREIGN KEY (`id_user`)
    REFERENCES `zinke_db`.`users` (`id`),
  CONSTRAINT `favorites_ibfk_2`
    FOREIGN KEY (`id_product`)
    REFERENCES `zinke_db`.`products` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zinke_db`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zinke_db`.`images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `id_product` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:41',
  `updatedAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:41',
  `deletedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_product` (`id_product` ASC) VISIBLE,
  CONSTRAINT `images_ibfk_1`
    FOREIGN KEY (`id_product`)
    REFERENCES `zinke_db`.`products` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 32
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zinke_db`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zinke_db`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `total` DECIMAL(10,0) NULL DEFAULT NULL,
  `status` VARCHAR(255) NULL DEFAULT NULL,
  `id_user` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:42',
  `updatedAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:42',
  `deletedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_user` (`id_user` ASC) VISIBLE,
  CONSTRAINT `orders_ibfk_1`
    FOREIGN KEY (`id_user`)
    REFERENCES `zinke_db`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zinke_db`.`orders_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zinke_db`.`orders_products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NULL DEFAULT NULL,
  `id_order` INT NULL DEFAULT NULL,
  `id_product` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:42',
  `updatedAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:42',
  `deletedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_order` (`id_order` ASC) VISIBLE,
  INDEX `id_product` (`id_product` ASC) VISIBLE,
  CONSTRAINT `orders_products_ibfk_1`
    FOREIGN KEY (`id_order`)
    REFERENCES `zinke_db`.`orders` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `orders_products_ibfk_2`
    FOREIGN KEY (`id_product`)
    REFERENCES `zinke_db`.`products` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zinke_db`.`products_colors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zinke_db`.`products_colors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_product` INT NULL DEFAULT NULL,
  `id_color` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:41',
  `updatedAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:41',
  `deletedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_product` (`id_product` ASC) VISIBLE,
  INDEX `id_color` (`id_color` ASC) VISIBLE,
  CONSTRAINT `products_colors_ibfk_1`
    FOREIGN KEY (`id_product`)
    REFERENCES `zinke_db`.`products` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `products_colors_ibfk_2`
    FOREIGN KEY (`id_color`)
    REFERENCES `zinke_db`.`colors` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zinke_db`.`sizes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zinke_db`.`sizes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `size` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:41',
  `updatedAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:41',
  `deletedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zinke_db`.`products_sizes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zinke_db`.`products_sizes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_product` INT NULL DEFAULT NULL,
  `id_size` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:41',
  `updatedAt` DATETIME NOT NULL DEFAULT '2024-05-06 00:36:41',
  `deletedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_product` (`id_product` ASC) VISIBLE,
  INDEX `id_size` (`id_size` ASC) VISIBLE,
  CONSTRAINT `products_sizes_ibfk_1`
    FOREIGN KEY (`id_product`)
    REFERENCES `zinke_db`.`products` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `products_sizes_ibfk_2`
    FOREIGN KEY (`id_size`)
    REFERENCES `zinke_db`.`sizes` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zinke_db`.`sequelizemeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zinke_db`.`sequelizemeta` (
  `name` VARCHAR(255) COLLATE 'utf8mb3_unicode_ci' NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE INDEX `name` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
