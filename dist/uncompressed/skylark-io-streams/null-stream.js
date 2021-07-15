define([
    "skylark-langx/skylark",
    "skylark-langx/langx",
    "./streams",
    "./_stream"
], function(skylark, langx, streams, Stream) {

    var NullStream = Stream.inherit({
        klassName : "NullStream",

        _construct : function() {
            Stream.prototype._construct.call(this, new Uint8Array(0));        
        }
    });


    return streams.NullStream = NullStream;

});
