#设置连接客户的的字符编码为UTF-8
SET NAMES UTF8;
#如果存在数据库 rent，先丢弃
DROP DATABASE IF EXISTS rent ;
#创建数据库
CREATE DATABASE rent CHARSET=UTF8;
#进入数据库
USE rent;
#表1,保存用户基本信息的表
CREATE TABLE rent_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	#保存用户手机号
	uPhone CHAR(11),
	uPwd VARCHAR(32),
);
#表2,保存首页、特色页的banner图片，发现页的四张轮播图(6张图)
CREATE TABLE rent_banner();
#表3,保存首页的热门城市图片及详情
CREATE TABLE rent_hotcity();
#表4,首页的特色房源，图片和详情
CREATE TABLE rent_features_i();
#表5,首页底部的旅游咨询
CREATE TABLE rent_consult();
#表6，首页底部的最新房源
CREATE TABLE rent_new();
#表7,每个热门城市下的房屋推荐
CREATE TABLE rent_house_list();
#表8,特色页的特色城市图片以及详情
CREATE TABLE rent_features_f();
#表9,每种特色房屋下对应的城市，以及房源信息
CREATE TABLE rent_features_city();
#表10,保存房东故事的表
CREATE TABLE rent_host_story();
#表11,保存房客故事的表
CREATE TABLE rent_tenant_story();
#表12,保存发现旅行的表
CREATE TABLE rent_found_travel();
