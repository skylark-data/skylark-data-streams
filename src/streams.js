define([
    "skylark-langx/skylark",
    "skylark-langx/langx"
], function(skylark, langx) {




    var streams = function() {
        return streams;
    }

    langx.mixin(streams,{
    	"Stream" : Stream,
        "DecodeStream" : DecodeStream
    });

    return skylark.streams = streams;
});
