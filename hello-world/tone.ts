class Tone{

    /**
     *  the input node(s)
     *  @type {GainNode|Array}
     */
    input: GainNode | GainNode[];

    /**
     *  the output node(s)
     *  @type {GainNode|Array}
     */
    output: GainNode | GainNode[];
    context: AudioContext;

    constructor(inputs = 1, outputs = 1) {

        this.input = (inputs > 1)? new Array(inputs) : this.context.createGain();
        this.output = (outputs > 1)? new Array(outputs) : this.context.createGain();

    }

    get Input():GainNode | GainNode[] {
        return this.input;
    }

    set Input(input: GainNode | GainNode[]) {
        this.input = input;
    }


    /**
     *  Set the parameters at once. Either pass in an
     *  object mapping parameters to values, or to set a
     *  single parameter, by passing in a string and value.
     *  The last argument is an optional ramp time which
     *  will ramp any signal values to their destination value
     *  over the duration of the rampTime.
     *  @param {Object|string} params
     *  @param {number=} value
     *  @param {Time=} rampTime
     *  @returns {Tone} this
     *  @example
     * //set values using an object
     * filter.set({
	 * 	"frequency" : 300,
	 * 	"type" : highpass
	 * });
     *  @example
     * filter.set("type", "highpass");
     *  @example
     * //ramp to the value 220 over 3 seconds.
     * oscillator.set({
	 * 	"frequency" : 220
	 * }, 3);
     */
    set(params: any, value: any, rampTime) {
        if (typeof params === "object"){
            rampTime = value;
        } else if (typeof params === "string"){
            var tmpObj = {};
            tmpObj[params] = value;
            params = tmpObj;
        }
        for (var attr in params){
            value = params[attr];
            var parent = this;
            if (attr.indexOf(".") !== -1){
                var attrSplit = attr.split(".");
                for (var i = 0; i < attrSplit.length - 1; i++){
                    parent = parent[attrSplit[i]];
                }
                attr = attrSplit[attrSplit.length - 1];
            }
            var param = parent[attr];
            if (isUndef(param)){
                continue;
            }
            if (param instanceof Tone.Signal){
                if (param.value !== value){
                    if (isUndef(rampTime)){
                        param.value = value;
                    } else {
                        param.rampTo(value, rampTime);
                    }
                }
            } else if (param instanceof AudioParam){
                if (param.value !== value){
                    param.value = value;
                }
            } else if (param instanceof Tone){
                param.set(value);
            } else if (param !== value){
                parent[attr] = value;
            }
        }
        return this;
    }

}