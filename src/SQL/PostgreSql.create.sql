﻿




CREATE TABLE Агрегатор (

 primaryKey UUID NOT NULL,

 А VARCHAR(255) NULL,

 МастерАгрегат_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE Детейл1 (

 primaryKey UUID NOT NULL,

 А VARCHAR(255) NULL,

 МастерДетейл1_m0 UUID NOT NULL,

 Агрегатор_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE МастерАгрегат (

 primaryKey UUID NOT NULL,

 А VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE Детейл2 (

 primaryKey UUID NOT NULL,

 А VARCHAR(255) NULL,

 Детейл1_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE МастерДетейл1 (

 primaryKey UUID NOT NULL,

 А VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMNETLOCKDATA (

 LockKey VARCHAR(300) NOT NULL,

 UserName VARCHAR(300) NOT NULL,

 LockDate TIMESTAMP(3) NULL,

 PRIMARY KEY (LockKey));



CREATE TABLE STORMSETTINGS (

 primaryKey UUID NOT NULL,

 Module VARCHAR(1000) NULL,

 Name VARCHAR(255) NULL,

 Value TEXT NULL,

 "User" VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMAdvLimit (

 primaryKey UUID NOT NULL,

 "User" VARCHAR(255) NULL,

 Published BOOLEAN NULL,

 Module VARCHAR(255) NULL,

 Name VARCHAR(255) NULL,

 Value TEXT NULL,

 HotKeyData INT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMFILTERSETTING (

 primaryKey UUID NOT NULL,

 Name VARCHAR(255) NOT NULL,

 DataObjectView VARCHAR(255) NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMWEBSEARCH (

 primaryKey UUID NOT NULL,

 Name VARCHAR(255) NOT NULL,

 "Order" INT NOT NULL,

 PresentView VARCHAR(255) NOT NULL,

 DetailedView VARCHAR(255) NOT NULL,

 FilterSetting_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMFILTERDETAIL (

 primaryKey UUID NOT NULL,

 Caption VARCHAR(255) NOT NULL,

 DataObjectView VARCHAR(255) NOT NULL,

 ConnectMasterProp VARCHAR(255) NOT NULL,

 OwnerConnectProp VARCHAR(255) NULL,

 FilterSetting_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMFILTERLOOKUP (

 primaryKey UUID NOT NULL,

 DataObjectType VARCHAR(255) NOT NULL,

 Container VARCHAR(255) NULL,

 ContainerTag VARCHAR(255) NULL,

 FieldsToView VARCHAR(255) NULL,

 FilterSetting_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE UserSetting (

 primaryKey UUID NOT NULL,

 AppName VARCHAR(256) NULL,

 UserName VARCHAR(512) NULL,

 UserGuid UUID NULL,

 ModuleName VARCHAR(1024) NULL,

 ModuleGuid UUID NULL,

 SettName VARCHAR(256) NULL,

 SettGuid UUID NULL,

 SettLastAccessTime TIMESTAMP(3) NULL,

 StrVal VARCHAR(256) NULL,

 TxtVal TEXT NULL,

 IntVal INT NULL,

 BoolVal BOOLEAN NULL,

 GuidVal UUID NULL,

 DecimalVal DECIMAL(20,10) NULL,

 DateTimeVal TIMESTAMP(3) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE ApplicationLog (

 primaryKey UUID NOT NULL,

 Category VARCHAR(64) NULL,

 EventId INT NULL,

 Priority INT NULL,

 Severity VARCHAR(32) NULL,

 Title VARCHAR(256) NULL,

 Timestamp TIMESTAMP(3) NULL,

 MachineName VARCHAR(32) NULL,

 AppDomainName VARCHAR(512) NULL,

 ProcessId VARCHAR(256) NULL,

 ProcessName VARCHAR(512) NULL,

 ThreadName VARCHAR(512) NULL,

 Win32ThreadId VARCHAR(128) NULL,

 Message VARCHAR(2500) NULL,

 FormattedMessage TEXT NULL,

 PRIMARY KEY (primaryKey));




 ALTER TABLE Агрегатор ADD CONSTRAINT FKbedc0ff149ab12c634a7a1f9532c80cd88d3559f FOREIGN KEY (МастерАгрегат_m0) REFERENCES МастерАгрегат; 
CREATE INDEX Indexbedc0ff149ab12c634a7a1f9532c80cd88d3559f on Агрегатор (МастерАгрегат_m0); 

 ALTER TABLE Детейл1 ADD CONSTRAINT FK54327f2a746ca8a51e9b44b1579a1ae5805d378d FOREIGN KEY (МастерДетейл1_m0) REFERENCES МастерДетейл1; 
CREATE INDEX Index54327f2a746ca8a51e9b44b1579a1ae5805d378d on Детейл1 (МастерДетейл1_m0); 

 ALTER TABLE Детейл1 ADD CONSTRAINT FK9349d85e8c09acdd7cc49fa71e5113871c3f22fe FOREIGN KEY (Агрегатор_m0) REFERENCES Агрегатор; 
CREATE INDEX Index9349d85e8c09acdd7cc49fa71e5113871c3f22fe on Детейл1 (Агрегатор_m0); 

 ALTER TABLE Детейл2 ADD CONSTRAINT FKe42f5934dada34f00f2a19a4c1afe595794a296f FOREIGN KEY (Детейл1_m0) REFERENCES Детейл1; 
CREATE INDEX Indexe42f5934dada34f00f2a19a4c1afe595794a296f on Детейл2 (Детейл1_m0); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 
