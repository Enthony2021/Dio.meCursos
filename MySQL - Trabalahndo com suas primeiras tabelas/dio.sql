create table pessoas (
    id int not null primary key auto,
    nome varchar(50),
    nascimento varchar(20) date
);

insert into pessoas (nome, nascimento) values ('Enthony','1996/02/29')
insert into pessoas (nome, nascimento) values ('Esdras','1997/05/30')
insert into pessoas (nome, nascimento) values ('Eulla','2011/03/23')