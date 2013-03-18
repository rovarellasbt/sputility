(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module( "Main" );

  test('a global SPUtility object is available', function() {
    ok(SPUtility, "SPUtility global object was not found.");
  });

  test('GetSPField throws an error when the field was not found', function() {
    ok(SPUtility, "SPUtility global object was not found.");
    throws(
      function() {
        SPUtility.GetSPField('foo bar');
      },
      "GetSPField: Unable to find a SPField named foo bar"
    );
  });


  module( "SPTextField", {
    setup: function() {
      this.textboxId = 'ctl00_m_g_b2a76005_5d3d_4591_9f83_b32d5af4e808_ctl00_ctl05_ctl00_ctl00_ctl00_ctl04_ctl00_ctl00_TextField';
      this.field = SPUtility.GetSPField('Title');
    }
  });

  test('GetSPField()', function() {
    expect( 3 );
    notStrictEqual(this.field, null, "GetSPField returned null (should have returned an object).");
    strictEqual(this.field.Type, "SPFieldText", "Wrong type: " + this.field.Type);
    strictEqual(
      this.field.Textbox.id, 
      this.textboxId, 
      "Textbox property is not set or is set to the wrong to the wrong DOM object.");
  });

  test("SetValue() and GetValue()", function() {
    expect( 1 );

    var expected = 'foo bar';
    this.field.SetValue(expected);

    strictEqual(this.field.GetValue(), 
      expected, 
      "SetValue() failed to set Textbox.");
  });


  module( "SPNumberField", {
    setup: function() {
      this.textboxId = 'ctl00_m_g_b2a76005_5d3d_4591_9f83_b32d5af4e808_ctl00_ctl05_ctl08_ctl00_ctl00_ctl04_ctl00_ctl00_TextField';
      this.field = SPUtility.GetSPField('Number');
    }
  });

  test('GetSPField()', function() {
    expect( 3 );
    notStrictEqual(this.field, null, "GetSPField returned null (should have returned an object).");
    strictEqual(this.field.Type, "SPFieldNumber", "Wrong type: " + this.field.Type);
    strictEqual(
      this.field.Textbox.id, 
      this.textboxId, 
      "Textbox property is not set or is set to the wrong to the wrong DOM object.");
  });

  test("SetValue() and GetValue()", function() {
    expect( 1 );

    var expected = 42;
    this.field.SetValue(expected);

    strictEqual(this.field.GetValue(), 
      expected, 
      "SetValue() failed to set Textbox.");
  });

}(jQuery));
