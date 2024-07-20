### Hexlet tests and linter status:
[![Actions Status](https://github.com/bdzhev/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/bdzhev/frontend-project-46/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/f43793ef6ae049e07b6b/maintainability)](https://codeclimate.com/github/bdzhev/frontend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/f43793ef6ae049e07b6b/test_coverage)](https://codeclimate.com/github/bdzhev/frontend-project-46/test_coverage)

# Программа "Вычислитель отличий" // DiffChecker CLI tool

## Description / О программе 
DiffChecker is a CLI program that determines the difference between two text files in .json, .yaml and .yml formats provided by the user.

Вычислитель отличий - программа, которая вычисляет семантические различия в двух предоставленных файлах в форматах .json, .yaml и .yml.

## Requirements / Требования
Minimal requirements:
- Node.js 14.21.3 and newer

Минимальные требования:
- Node.js 14.21.3 и выше

## Installation / Установка
For a successful download, enter and run 'install' while in the program's main file
Для загрузки, выполните команду 'install' в папке программы

## Manual / Инструкция

```
make install
```
Install the required dependencies and modules

Загрузка необходимых зависимостей


```
gendiff
```
Generate a report between two files.

Сгенерировать отчет о разнице между двумя файлами.

### Usage / Использование
```
gendiff <filepath1> <filepath2> -f <format>
```

### Parameters / Параметры
- ```<filepath1>```
Path to the first file.

Путь к первому файлу.
- ```<filepath2>```
Path to the second file.
----------------
Путь ко второму файлу.

Paths to files can be both relative and absolute.

Пути к файлам могут быть как и относительными, так и абсолютными.
### Options / Опции

```
gendiff -h
```
Get CLI program manual

Получить инструкцию по использованию программы
```
gendiff -f <format>
```
Choose a desired format of the report. Available options:
- json
- stylish (by default)
- plain

If the -f flag is omitted, the report will be generated in the default stylish format.

------------
Выберите желаемый формат отчета. Доступные варианты отчета:
- json
- stylish (по умолчанию)
- plain

Если флаг -f опущен, отчет будет сгенерирован в формате stylish по умолчанию.

## Demo of the program / Демонстрация использования

Stylish:
[![asciicast](https://asciinema.org/a/h5fvX85gfeXWsewLwKk6ZnJcR.svg)](https://asciinema.org/a/h5fvX85gfeXWsewLwKk6ZnJcR)

Plain:
[![asciicast](https://asciinema.org/a/50tUTHsBcdj7ScdhqWNB5OTFK.svg)](https://asciinema.org/a/50tUTHsBcdj7ScdhqWNB5OTFK)
