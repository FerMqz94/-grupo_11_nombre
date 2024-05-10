-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: zinke_db
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
INSERT INTO `banners` VALUES (1,'imagen-carrusel-1.jpg','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(2,'imagen-carrusel-2.jpg','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(3,'imagen-carrusel-3.jpg','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(4,'mensaje-de-la-marca-desktop-tablet.png','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(5,'mensaje-de-la-marca-phone.png','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL);
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Abrigos','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(2,'Jeans','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(3,'Buzos y sweaters','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(4,'Remeras','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(5,'Camisas y blusas','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(6,'Tops','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(7,'Pantalones y shorts','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(8,'Vestidos y polleras','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(9,'Cápsula Beige','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(10,'Cápsula American','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(11,'Cápsula 3024','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(12,'Sin categoría','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'black','#000000','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(2,'beige','#f5f5dc','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(3,'blue','#0000ff','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(4,'white','#ffffff','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(5,'red','#ff0000','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(6,'green','#008000','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(7,'purple','#800080','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(8,'orange','#ffa500','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(9,'lightblue','#add8e6','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(10,'gray','#808080','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(11,'lavender','#e6e6fa','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(12,'pink','#ffc0cb','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(13,'silver','#c0c0c0','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(14,'bluishGreen','#419197','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(15,'gold','#ffd700','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL);
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
INSERT INTO `favorites` VALUES (1,1,1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(2,2,1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(3,2,3,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL);
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'image-1710443878037.png',1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(2,'image-1710443878038.png',1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(3,'image-1710443878040.png',1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(4,'image-1710444100211.jpg',2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(5,'image-1710444100213.png',2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(6,'image-1710444100214.png',2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(7,'image-1710444275288.jpg',3,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(8,'image-1710444275289.png',3,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(9,'image-1710444275291.png',3,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(10,'image-1710444541165.jpg',5,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(11,'image-1710444541166.png',5,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(12,'image-1710444541633.png',5,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(13,'image-1710444623614.jpg',6,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(14,'image-1710444623615.png',6,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(15,'image-1710444624060.png',6,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(16,'image-1710444797275.jpg',7,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(17,'image-1710444797277.png',7,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(18,'image-1710444797278.png',7,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(19,'image-1710444931685.jpg',8,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(20,'image-1710444931686.png',8,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(21,'image-1710444932167.png',8,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(22,'image-1710445129750.png',9,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(23,'image-1710445129751.png',9,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(24,'image-1710445130260.jpg',9,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,40500,'completed',2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(2,80500,'completed',1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders_products`
--

LOCK TABLES `orders_products` WRITE;
/*!40000 ALTER TABLE `orders_products` DISABLE KEYS */;
INSERT INTO `orders_products` VALUES (1,2,1,1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(2,1,1,5,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(3,2,2,2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(4,1,2,4,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL);
/*!40000 ALTER TABLE `orders_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Remera','Remera de algodón básica, usable en cualquier situación','Una remera que se va a convertir en tu aliada día a día',8000,0,0,1,4,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(2,'Campera/camisa ondera','Campera de Jean no binarie, holgada y con mucho estilo','Una prenda para ponerle onda a tu rutina de todos los días',42000,0,0,1,1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(3,'Joggin cargo','Joggin super comodo, para que te sientas libre y comodx siempre','¡Sentite comodx y urbanx!',18000,0,1,1,7,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(4,'Remera overzise','Remera oversize super olgada','Te sentirás libre con esta prenda super comoda',17000,0,0,1,4,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(5,'Pantalon a cuadros','Pantalón a cuadros edgy y con mucho estil','Descubrirás un estilo único e innovador con esta prenda zinke',13500,0,0,1,7,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(6,'Chaleco de jean','Chaleco de jean rockero y con estilo','Sin mangas y con mucha onda, este chaleco te dará el estilo que siempre buscaste',12500,0,1,1,1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(7,'Short jogging','Jogging de algodón que te permitirá realizar mas comodx todas tus actividades','Jogging super comodo para tu rutina',11500,0,1,1,7,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(8,'Vestido slim fit','Vestido pegado al cuerpo de algodon y spandex super comodo','En este verano sentite linx, comodx y libre con tu cuerpo',22000,0,0,1,12,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(9,'Blazer oversize','Blazer oversize tela sastrera con botones en la manga','Blazer oversize con mas estilo del que esperabas',29000,0,1,1,1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(10,'pantalon','ssds','fdgd',2224,0,0,1,12,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products_colors`
--

LOCK TABLES `products_colors` WRITE;
/*!40000 ALTER TABLE `products_colors` DISABLE KEYS */;
INSERT INTO `products_colors` VALUES (1,3,3,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(2,3,2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(3,3,1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(4,6,3,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(5,6,4,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(6,6,2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(7,7,5,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(8,7,2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(9,7,1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(10,9,1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL);
/*!40000 ALTER TABLE `products_colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products_sizes`
--

LOCK TABLES `products_sizes` WRITE;
/*!40000 ALTER TABLE `products_sizes` DISABLE KEYS */;
INSERT INTO `products_sizes` VALUES (1,1,3,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(2,1,2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(3,1,4,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(4,1,1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(5,1,5,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(6,2,3,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(7,2,2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(8,2,4,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(9,2,1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(10,2,5,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(11,3,3,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(12,3,4,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(13,4,5,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(14,4,3,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(15,5,3,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(16,5,2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(17,5,1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(18,6,3,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(19,6,4,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(20,6,5,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(21,7,4,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(22,7,2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(23,7,3,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(24,8,4,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(25,8,2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(26,8,1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(27,9,4,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(28,9,2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(29,9,3,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(30,10,5,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(31,10,4,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(32,10,2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL);
/*!40000 ALTER TABLE `products_sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'REGULAR','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(2,'ADMIN','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL);
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20240427033104-create-rols.js'),('20240427033114-create-categories.js'),('20240427033124-create-users.js'),('20240427033134-create-colors.js'),('20240427033144-create-sizes.js'),('20240427033154-create-product.js'),('20240427033164-create-images.js'),('20240427033174-create-products-colors.js'),('20240427033184-create-products-sizes.js'),('20240427033194-create-orders.js'),('20240427033204-create-favorites.js'),('20240427033214-create-orders-products.js'),('20240427033224-create-banners.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,1,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(2,2,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(3,3,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(4,4,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(5,5,'2024-05-08 21:14:21','2024-05-08 21:14:21',NULL);
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Fernando Márquez','FerMarquez','fer_marquez94@gmail.com','$2a$10$6TQUu2svGFFtZ3FlxQMYneRwOiJ2NjekrPUEbHcTSh6ensSjBxzDm',2,'default-avatar.jpg','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(2,'Paola Vera','pmnvera','pmnvera@gmail.com','$2a$12$qg0qnZbDoZpa52oS479UnuUtRRXysVjKlQeqvZAu1.KNzKtnSTGm6',1,'default-avatar.jpg','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(3,'Alexander Chambi','Alex036@1','alexanderbejarano036@gmail.com','$2a$10$e1s81MNP9MypYyDFz.IK0.UIcjlv63MkPN2ym0tV6FhlGSQyk9KOe',2,'default-avatar.jpg','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(4,'Gaston castillo','valegas','gastoncastillo1920@gmail.com','$2a$12$xQfuA.KwnNLhrjw1N39uYO64DKgZ2MtPCS3LGacAMJYxIKkzLSG5K',2,'default-avatar.jpg','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(5,'queso','soy_alguien','tiagocuello@gmail.com','$2a$12$X.myQUrhjmXxe6erugXoIugjslOaHuCNisnDG5zgVXp6BqzpFVf6u',NULL,'default-avatar.jpg','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL),(6,'fer','coso','fer@gmail.com','$2a$12$5LYuu/zN2ntGMUSH1AKRceB/tqGw90z8hfMtETIhohfGf4MR1C5xC',1,'default-avatar.jpg','2024-05-08 21:14:21','2024-05-08 21:14:21',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-08 18:23:01
