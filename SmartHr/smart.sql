use master
go

drop database SmartHr
go

create database SmartHr
go

use SmartHr
go

Create Table Candidates(
idCandidate int primary key identity,
Nom varchar(30) not null,
Prenom varchar(30) not null,
Email varchar(30) unique not null,
Ville varchar(30) not null,
Tele varchar(30) unique not null,
etat int not null default 0
)

Create Table Comptes(
idCompte int primary key identity,
Email varchar(50) unique not null,
Password varchar(50) not null,
Role int not null,
idCandidate int foreign key references Candidates(idCandidate) ON DELETE CASCADE
)


Create Table Cv(
IdCv int primary key identity,
fullName varchar(250) not null,
Email varchar(50) unique not null,
Tele varchar(30) unique not null,
Job text not null,
objectif_de_carriere text,
Adress1 text not null,
Adress2 text,
idCandidate int foreign key references Candidates(idCandidate) ON DELETE CASCADE
)

Create Table Profile_Professionel(
idPP int primary key identity,
Description text not null,
IdCv int foreign key references Cv(IdCv) ON DELETE CASCADE
)

Create Table LangueParle(
idLP int primary key identity,
Langue varchar(50) not null,
IdCv int foreign key references Cv(IdCv) ON DELETE CASCADE
)

Create Table LangueEcrire(
idPE int primary key identity,
Langue varchar(50) not null,
IdCv int foreign key references Cv(IdCv) ON DELETE CASCADE
)

Create Table Experience_Pro(
IdExperience int primary key identity,
Name varchar(50) not null,
DateBegin date not null,
DateEnd date not null,
Compagny varchar(255),
Location text,
IdCv int foreign key references Cv(IdCv) ON DELETE CASCADE
)

Create Table Experiences(
idES int primary key identity,
Description text not null,
IdExperience int foreign key references Experience_Pro(IdExperience) ON DELETE CASCADE
)

Create Table taches_Experience(
idTE int primary key identity,
Description text not null,
idES int foreign key references Experiences(idES) ON DELETE CASCADE
)

Create Table Formations(
idF int primary key identity,
Description text not null,
DateBegin date not null,
DateEnd date not null,
Location text,
IdCv int foreign key references Cv(IdCv) ON DELETE CASCADE
)


Create Table Activities(
idA int primary key identity,
Activity varchar(255) not null,
IdCv int foreign key references Cv(IdCv) ON DELETE CASCADE
)


insert into Comptes values('canadiane@gmail.com',HashBytes('MD5', '123'),1,null) 
insert into Comptes values('management@gmail.com',HashBytes('MD5', '123'),0,null) 
