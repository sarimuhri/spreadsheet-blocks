"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_misc = 270;

Blockly.Blocks["sprego_start"] =
{
	init: function()
	{
		this.setDeletable(false);
		this.setInputsInline(true);
		this.appendValueInput("FORMULA")
			.appendField("=");
		this.setTooltip("Itt kezdődik a kód. Ami ezen a blokkon kívül van, azt a program nem értelmezi.");
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_expression"] =
{
	init: function()
	{
		this.setOutput(true);
		this.appendValueInput("NEXT")
			.appendField(new Blockly.FieldTextInput("kifejezés"), "STATEMENT");
		this.setTooltip("Tetszőleges kifejezés (tartomány, matematikai művelet, logikai vizsgálat, stb.)\nEz a blokk helyettesítheti a többi kifejezés blokkot.");
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_mathops"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("LEFT");
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["+", "+"],
						   ["-", "-"],
						   ["*", "*"],
						   ["/", "/"],
						   ["^", "^"]
						]), "OPERATOR");
		this.appendValueInput("RIGHT");
		this.setTooltip("Elvégzi a kiválasztott matematikai műveletet a bal és jobb oldalon megadott kifejezéssel.");
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_logicops"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("LEFT");
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["=", "="],
						   ["<", "<"],
						   [">", ">"],
						   ["<=", "<="],
						   [">=", ">="],
						   ["<>", "<>"]
						]), "OPERATOR");
		this.appendValueInput("RIGHT");
		this.setTooltip("Elvégzi a kiválasztott logikai műveletet a bal és jobb oldalon megadott kifejezéssel.");
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_concat"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("FIRST");
		this.appendDummyInput()
			.appendField("&");
		this.appendValueInput("SECOND");
		this.setTooltip("Két szövegdarabot összefűz egy szöveggé.");
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_array"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("START");
		this.appendDummyInput()
			.appendField(":");
		this.appendValueInput("END");
		this.setTooltip("Kijelöl egy tartományt az első és utolsó cella hivatkozása alapján.");
		this.setColour(color_misc);
	}
};