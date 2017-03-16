"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_sum/avg/count/product"] = function(block)
{
	var name = block.getFieldValue("NAME");
	name = (name === "SUM") ? "szum" : ((name === "AVG") ? "átlag" : ((name === "COUNT") ? "darab" : "szorzat"));
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	return [name + "(" + array + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_min/max"] = function(block)
{
	var name = (block.getFieldValue("NAME") === "MIN") ? "min" : "max";
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	return [name + "(" + array + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_small/large"] = function(block)
{
	var name = (block.getFieldValue("NAME") === "SMALL") ? "kicsi" : "nagy";
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	var n = Blockly.JavaScript.valueToCode(block, "N", Blockly.JavaScript.ORDER_NONE || "");
	return [name + "(" + array + "; " + n + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_round/rounddown/roundup"] = function(block)
{
	var name = block.getFieldValue("NAME");
	name = (name === "ROUND") ? "kerekítés" : ((name === "ROUNDDOWN") ? "kerek.le" : "kerek.fel");
	var value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_NONE || "");
	var n = Blockly.JavaScript.valueToCode(block, "N", Blockly.JavaScript.ORDER_NONE || "");
	return [name + "(" + value + "; " + n + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_mod/pow"] = function(block)
{
	var name = (block.getFieldValue("NAME") === "MOD") ? "maradék" : "hatvány";
	var value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_NONE || "");
	var n = Blockly.JavaScript.valueToCode(block, "N", Blockly.JavaScript.ORDER_NONE || "");
	return [name + "(" + value + "; " + n + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_sqrt/abs/fact"] = function(block)
{
	var name = block.getFieldValue("NAME");
	name = (name === "SQRT") ? "gyök" : ((name === "ABS") ? "abs" : "fakt");
	var value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_NONE || "");
	return [name + "(" + value + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_rand"] = function(block)
{
	return ["vél()", Blockly.JavaScript.ORDER_NONE];
};