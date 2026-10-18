import {test} from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {parseNumericText, updateNumericInput} from '../src/numeric-input.js';

test('Learn formats as you type, preserves cents and a mid-number caret', () => {
  const input = new JSDOM('<input type="text">').window.document.querySelector('input');
  input.value='1234567.50'; input.setSelectionRange(4,4);
  assert.equal(updateNumericInput(input,{money:true}), '');
  assert.equal(input.value,'1,234,567.50');
  assert.equal(input.selectionStart,5);
  assert.equal(parseNumericText(input.value),1234567.5);
  input.value='1000.'; updateNumericInput(input,{money:true});
  assert.equal(input.value,'1,000.');
});
test('invalid amounts block submission; an optional blank remains optional', () => {
  const input = new JSDOM('<form><input type="text"></form>').window.document.querySelector('input');
  for (const value of ['-1','0','1.234','1e3','abc','1000000000000']) {
    input.value=value; updateNumericInput(input,{money:true});
    assert.equal(input.checkValidity(),false,value);
  }
  input.value=''; updateNumericInput(input,{money:true}); assert.equal(input.checkValidity(),true);
  updateNumericInput(input,{money:true,required:true}); assert.equal(input.checkValidity(),false);
  for (const text of ['','1,2','123abc','1e3','Infinity']) assert.ok(Number.isNaN(parseNumericText(text)));
});
