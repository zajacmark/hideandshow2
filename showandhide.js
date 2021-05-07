(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mc_sticker2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AnsHtQjMjMgBkhQABkgDMjNQDMjLEgAAQEhAADMDLQDMDNAAEgQAAEhjMDMQjMDNkhAAQkgAAjMjNg");
	this.shape.setTransform(0.0192,0.0234,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660000").s().p("AAALEIgogBQgEgBgDgDQgDgDAAgEQABgEADgDQADgDAEAAIAnACIAUAAQAEAAADADQADACAAAEIAAABQAAAEgDACQgDADgEABIgUAAgABKK9QgDgCAAgEIAAgBQgBgEADgDQACgDAEgBQAegDAegFQAEgBADACQADADABAEIAAAAQABAEgCADQgDAEgEAAQgdAGgfADIgBABQgEAAgDgDgAhkK9QgegEgdgHQgEgBgCgDQgCgDABgEIAAgBQABgEADgCQAEgCAEABQAcAGAdAEQAEABADADQACADAAAEIAAAAQgBAEgEADQgCACgDAAIgCAAgADBKoQgDgCgBgEIAAAAQgCgEACgEQACgDAEgBQAdgJAbgLQAEgBAEABQAEACABAEIAAAAQACAEgCADQgBAEgEACQgdALgdAJIgDAAIgFgBgAjYKiQgegJgcgLQgEgCgBgEQgCgDACgEIAAAAQABgEAEgCQAEgBAEABQAbAMAcAIQAEACACADQACAEgBAEIAAABQgBADgEACIgEABIgDgBgAEzJ9QgEgCgCgEQgCgDABgEQACgEAEgCQAagNAZgPQADgDAEABQAEABACAEIAAAAQADADgBAEQgBAEgEADQgaAPgaAOIgFABIgDAAgAlJJ0QgagOgagRQgDgCgBgEQgBgEACgEIABAAQACgDAEgBQAEgBAEACQAYAQAaAOQADACACAEQABAEgCAEQgCADgEACIgDAAIgFgBgAGZI+QgEAAgCgDIAAgBQgDgDABgEQABgEADgDQAXgRAWgTQADgDAFAAQAEAAACADQADADAAAFQAAAEgDADQgXAUgYASQgDACgDAAIgCgBgAmtIzQgZgUgXgWQgDgDgBgEQAAgEADgDQADgDAEAAQAEAAADADQAXAVAYATQADACABAEQABAEgDADIAAABQgDADgEABIgBAAQgDAAgDgCgAHsHuIAAAAQgDgDAAgEQAAgEADgDQAUgVATgXQADgDAEgBQAEAAADADIAAAAQAEADAAADQAAAFgCADQgTAXgWAWQgDADgEAAIAAAAQgEAAgDgDgAoCHhQgEAAgDgDQgVgWgSgYQgDgDAAgEQABgEADgDIABAAQADgCAEAAQAEAAACAEQASAWAUAWQADADAAAEQAAAEgDADIAAAAQgDADgEAAIAAAAgAI6GUIAAAAQgEgDAAgEQgBgEADgDQARgZAPgZQACgEAEgBQAEgBADACQAEACABAEQABAEgCADQgPAbgSAZQgDAEgEAAIgCAAQgDAAgCgBgApNGEQgEgBgDgDQgQgagOgbQgCgEABgEQABgEADgCIABAAQADgCAEABQAEACACADQAOAaAQAaQADADgBAEQgBAEgDACIgBAAQgCACgDAAIgCAAgAJ4EtIAAAAQgEgCgBgEQgCgEACgEQAMgbAKgcQABgEAEgCQAEgBAEABIAAAAQAEACABADQACAEgBAEQgKAdgNAcQgCADgDACIgEAAIgEAAgAqHEaQgEgBgBgEQgMgcgJgdQgBgEACgDQACgEADgBIABgBQADgBAEACQAEACABAEQAJAcALAbQACAEgCAEQgBAEgEABIgEABIgEgBgAKiC8IAAAAQgEgBgDgEQgCgDABgEQAHgdAFgeQABgEADgCQAEgCAEAAQAEABACADQACAEAAAEQgFAegHAdQgBAEgEADQgCABgDAAIgCAAgAqsCpQgEgDgBgEQgGgdgFgfQAAgEACgDQADgEAEgBIAAAAQAEAAAEACQADADAAAEQAEAeAHAdQABAEgDADQgCAEgEABIAAAAIgCAAIgFgBgAK2BGIAAAAQgEAAgDgDQgCgEAAgEQACgdAAgeQABgDACgDQgCgCgBgEQAAgegDgeQAAgEACgDQADgEAEAAQAEAAADACQAEADAAAEQADAeAAAgQABAEgDACQACADAAADQABAfgDAeQAAAEgDADQgDACgEAAIgBAAgAq+AxQgDgDgBgEIgBgqIABgVQAAgFADgCQADgDAEAAIAAAAQAFAAACADQADADAAAFIgBAUIABApQABAEgDADQgDADgEABIAAAAIgBAAQgDAAgDgDgAq1hGIAAAAQgEgBgDgDQgCgDAAgEQADgeAGgeQAAgEAEgCQADgDAEABQAEABADADQACAEgBAEQgFAcgDAeQAAAEgEADQgDACgDAAIgBAAgAKoh9QgEgDAAgEQgGgdgIgcQgBgEACgEQACgDAEgBIAAAAQAEgBAEACQAEACABAEQAIAdAFAeQABAEgCADQgDAEgEAAIgCAAQgDAAgCgBgAqhi8IAAAAQgEgBgCgDQgCgEABgEQAJgdALgdQACgEADgBQAEgCAEACIAAAAQAEABACAEQABAEgBAEQgLAbgJAdQgBAEgDACIgFABIgDgBgAKJjwQgDgCgCgEQgLgbgNgbQgCgEACgEQABgEADgCIABAAQADgBAEABQAEABACAEQAOAbALAdQABAEgBAEQgCADgEACIAAAAIgEABIgEgBgAp2ksIgBAAQgDgCgCgEQgBgEACgEQANgaAQgbQADgDAEgBQAEgBADACQAEACABAEQABAEgDAEQgPAZgNAaQgCAEgEACIgDAAIgEgBgAJWlcQgEgBgCgDQgPgZgSgZQgDgDABgEQABgEADgCIAAAAQADgDAEABQAFAAACADQASAZAQAaQACAEgBAEQgBAEgDACIgBAAIgEACIgDgBgAo5mTIgBAAQgDgDgBgEQAAgEACgDQATgYAUgXQADgDAEgBQAEAAADADIAAAAQADADAAAEQABAEgDADQgUAXgSAXQgCADgEABIgCAAQgDAAgCgCgAIRm7QgEgBgDgDQgRgUgTgTIgDgCQgDgDAAgFQAAgEADgDQADgCAEAAQAEAAADACIADAEQATATASAUQADADAAAEQgBAEgDADQgDADgEAAIAAAAgAnknqQgEgBgDgDIAAAAQgDgDABgEQAAgEACgDQAWgVAXgTQADgDAEABQAEAAADADQADADgBAEQAAAEgDADQgWATgVAVQgDADgEAAIgBAAgAG2oRQgWgTgYgRQgDgDgBgEQgBgEADgDIAAAAQACgEAEAAQAEgBAEACQAYARAXAUQAEADAAAEQAAAEgDADIAAABQgCADgEAAIgBAAQgEAAgDgCgAmKo3QgEAAgDgEQgCgDABgEQAAgEAEgDQAZgSAagPQAEgCAEABQAEABACAEIAAAAQACAEgBAEQgBAEgEACQgZAPgZARQgCABgDAAIgCAAgAFWpVQgagPgagMQgEgCgCgEQgBgEACgEIAAAAQACgEADgBQAEgBAEACQAcAMAaAPQAEACABAEQABAEgCAEQgCAEgEABIgDAAIgFgBgAkkpzQgDgCgCgDIAAAAQgCgEACgEQABgEAEgCQAcgMAdgKQAEgCADACQAEACABAEIAAAAQACAEgCADQgCAEgEACQgcAJgbAMIgEABIgEAAgADsqHQgcgKgcgHQgEgBgDgEQgCgEABgDIAAgBQABgDAEgDQAEgCADABQAeAIAcAKQAEABACAEQACAEgCAEQgBAEgEABIgEACIgDgBgAizqbQgEgDgBgEIAAAAQgBgEACgDQADgEAEgBQAdgHAfgEQAEgBAEADQADACAAAEIAAAAQABAEgCADQgDAEgEABQgeAEgdAHIgCAAQgDAAgCgBgAB6qlQgdgFgegCQgEAAgDgDQgDgEABgEQAAgEADgDQADgCAEAAQAfADAeAFQAEAAADAEQACADgBAEIAAAAQAAAEgEADQgCABgDAAIgCAAgAg9qvQgDgDgBgEQAAgEADgDQADgDAEAAQAcgDAbABIADAAQAFAAACADQADACAAAFQAAAEgDACQgCADgFABIgDAAQgbAAgbABIAAABQgEAAgDgDg");
	this.shape_1.setTransform(0.0002,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcKzQgDgDgEAAIgUAAIgngBQgEAAgDACQgDADAAAEIgngDIAAgBQAAgEgCgDQgDgDgEgBQgdgEgcgGQgEgBgEACQgDACgBAFIAAAAIgmgKIAAgBQABgEgCgDQgCgEgDgBQgdgJgbgMQgEgBgEABQgDACgCAEIAAAAIgkgRQACgEgBgDQgCgEgDgDQgagNgYgQQgEgDgEABQgEABgCADIAAAAIgggWIAAAAQADgDgBgEQAAgFgEgCQgYgTgXgVQgDgDgEAAQgEAAgDAEIgOgPIgPgPQADgCAAgEQAAgFgDgDQgUgVgRgXQgDgDgEgBQgEAAgDACIgXggQADgCABgEQABgEgCgDQgRgZgOgbQgCgDgDgBQgEgBgEACIAAAAIgRgjQAEgCABgEQACgEgCgEQgLgbgJgcQgBgEgEgBQgDgCgEABIgBAAIgKgmIAAAAQAEgBADgDQACgEgBgEQgGgdgEgeQgBgEgDgCQgEgDgEABIAAAAIgEgnQAEgBADgCQADgEAAgEIgBgpIAAgUQAAgEgCgEQgDgDgEAAIgBAAIADgnIAAAAQAEABADgDQAEgDAAgEQADgdAFgdQABgEgCgEQgDgDgEAAIAKgnQADABAEgCQADgCACgEQAIgcALgcQABgEgBgEQgCgEgEgBIAAAAIAQglIABAAQADACAEgBQAEgCACgDQANgaAQgaQACgEgBgDQgBgFgEgCIAXggQADACAEgBQAEAAADgEQARgXAUgXQADgDAAgEQgBgEgDgCIAbgcIABgCIAAABQADADAFAAQAEAAADgDQAVgVAWgTQADgCABgFQAAgEgDgDIAfgXQADADAEAAQAEABADgCQAZgRAagPQADgCABgEQABgEgCgEIAkgSQACAEAEABQAEABADgBQAbgMAcgKQAEgCACgDQACgEgBgEIAmgLQABAEAEACQADACAEgBQAdgHAegEQAEgBADgDQACgEAAgEIAAAAIAogFQAAAFADACQADADAEAAQAbgCAbAAIAEAAQAEAAADgDQADgDAAgEIAoABQgBAFADADQADADAEAAQAeADAdAEQAEABADgCQAEgCAAgFIAAAAIAnAIIAAABQgBAEADADQACAEAEABQAcAHAcAKQAEACADgCQAEgCACgEIAkAPIAAAAQgCAEACAEQABAEAEACQAaAMAaAPQAEACAEgBQAEgBACgEIAiAWQgCAEAAAEQABAEADACQAYARAXATQADADAEgBQAEAAADgDIAeAcQgDADAAAEQAAAEADADIADADQATATARATQADADAEABQAEAAADgDIAZAfQgDACgBAEQAAAEACAEQASAYAPAZQACAEAEABQAEAAAEgBIATAjIAAAAQgEACgBADQgCAEACAEQANAbALAbQACAEAEACQADABAEgBIANAnIgBAAQgEABgCAEQgCADABAEQAIAdAGAdQABAEADACQADACAEAAIAGAoQgEABgDADQgCADAAAEQADAeABAfQAAADACADQgCADAAACQAAAegDAdQAAAFACADQADADAEAAIABAAIgFAoQgEgBgEACQgDADgBADQgFAegHAdQgBAEADAEQACADAEABIgMAmIAAAAQgEgBgEACQgDACgCADQgKAcgMAbQgCAEACAEQABAEAEACIgSAjQgEgCgEABQgEABgCAEQgPAZgRAZQgDADABAEQABAEADADIAAAAIgYAfIgBAAQgDgDgEABQgEAAgDAEQgSAWgVAVQgDADAAAEQAAAEADADIgbAaQgDgDgEAAQgFAAgDADQgWATgXASQgDACgBAEQAAAEACAEIggAWQgDgEgEAAQgEgBgDACQgZAPgaANQgEACgBAEQgCAEACAEIglAQIAAAAQgBgEgEgBQgEgCgEACQgbAKgdAJQgEABgCADQgBAEABAEIgnAJQAAgEgEgCQgDgDgEABQgdAFgfAEQgEAAgCAEQgDADABAEIgpACQAAgEgDgCg");
	this.shape_2.setTransform(-0.1125,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_sticker2, new cjs.Rectangle(-70.7,-70.7,141.5,141.5), null);


(lib.mc_sticker1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AtINJQldlcAAntQAAnsFdldQFclcHsAAQHtAAFdFcQFcFdAAHsQAAHtlcFcQldFdntAAQnsAAlcldg");
	this.shape.setTransform(-0.05,-0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660000").s().p("AAGStQgCgDAAgEIAAAAQgBgEADgDQADgDAEAAIA8gCQAFAAADADQADACAAAFQAAAEgDADQgCADgEAAIg9ACIgBAAQgEAAgDgDgAgvSvQgfgBgdgCQgEgBgDgDQgDgDAAgEIAAAAQABgEADgDQADgDAEAAQAeADAdABQAEAAADADQADADAAAEIAAABQAAADgDADQgDADgEAAIAAAAgACASnQgDgDgBgEIAAAAQAAgEACgDQADgEAEAAQAegDAegFQAEAAAEACQADADABAEQAAAEgCADQgDAEgEAAQgeAFgfADIgBAAQgDAAgDgCgAinSlIg7gJQgEgBgDgDQgCgDABgEIAAgBQAAgEAEgCQADgDAEABIA6AJQAEABADADQADADgBAEIAAABQgBAEgDACQgDACgDAAIgBAAgAD4SVQgEgCgBgEQgBgEADgDQACgEAEgBQAdgGAdgHQAEgBADACQAEACABAEQABAEgCADQgCAEgEABQgdAIgeAGIgCAAQgDAAgCgCgAkdSQIg6gPQgEgBgCgEQgCgEABgDIAAgBQABgEAEgCQADgCAEABIA5APQAEABADAEQACADgBAEIAAABQgBADgEACQgCACgDAAIgCAAgAFtR4QgEgCgCgEQgBgEACgEQACgDAEgBQAcgJAcgLQAEgBAEACQADABACAEIAAAAQABAEgBADQgCAEgEACQgcAKgdAKIgDAAIgEgBgAmRRuQgcgKgcgMQgEgBgBgEQgCgEACgDIAAgBQABgEAEgBQAEgCAEACQAbALAcAKQAEABABAEQACAEgBAEIAAAAQgCAEgDACIgFABIgDgBgAHdROQgEgBgBgEIAAAAQgCgEACgEQABgEAEgBQAbgMAagOQAEgBAEABQAEABACAEIAAAAQACAEgBAEQgCAEgEABQgaAOgcAMIgEABIgEgBgAoARAQgbgNgbgOQgDgCgBgEQgCgEACgDIAAgBQACgDAEgBQAEgCAEACQAaAOAbANQAEABABAEQABAEgBAEIgBABQgCADgDABIgDABIgFgBgAJJQZQgEgBgCgEIAAAAQgCgEABgDQABgFADgCQAagPAZgQQADgCAEABQAEABACADIABAAQACADgBAFQgBAEgDACQgZARgbAPIgEABIgDAAgApqQHQgZgQgZgRQgEgCgBgEQgBgEADgEIAAAAQACgDAEgBQAEgBADADQAZARAaAPQADACABAEQABAEgCAEIAAAAQgCADgEABIgDABQgCAAgDgCgAKvPYQgFgBgCgDIAAgBQgCgDAAgDQABgFADgCIAvgkQADgDAEABQAEAAADADIAAAAQADADgBAEQAAAFgDACQgYATgYASQgDACgDAAIgBAAgArNPEIgvgmQgDgDAAgEQgBgEADgEQADgDAEAAQAEAAADACIAuAmQADACABAEQABAEgDADIAAABQgDADgEABIgBAAQgDAAgDgCgAMNONQgFAAgDgDIAAgBQgCgDAAgDQAAgFADgCIArgpQADgDAFAAQAEABADACIAAAAQADADAAAEQgBAFgCADIgsAoQgDADgEAAIAAAAgAsqN1IgmglIgJgJQgCgCAAgFQAAgEACgDQADgCAFgBQAEABADACIAJAJIAlAkQADADAAAEQAAAEgDADQgCADgFAAIAAABQgEAAgDgDgANaM5QgDgDAAgEQAAgEADgDIAngsQADgDAEAAQAEgBAEADQADADAAAEQAAAEgCADIgpAsQgDADgEABIAAAAQgEAAgDgDgAt7MgQgEgBgDgDIgmgtQgDgDABgEQAAgEADgDIAAAAQAEgCADAAQAFAAACAEIAmAsQADADAAAEQAAAEgDADQgDADgEAAIgBAAgAOqLeIAAAAQgEgDAAgEQAAgEACgDIAkgwQADgEAEAAQAEgBADACQAEADAAAEQABAEgCADQgSAZgTAYQgDAEgEAAIgBAAQgDAAgDgCgAvGLEQgFAAgCgEQgSgYgRgZQgCgDABgEQABgFADgCIABAAQADgCADABQAFABACADQAQAZASAYQADADgBAEQgBAEgCACIgBAAQgDADgDAAIgBgBgAPxJ8QgEgCgBgEQgBgEADgEQAPgZAPgaQACgDAEgBQAEgCADACIABABQADACABADQABAEgCAEQgOAagQAaQgDADgEABIgCABQgDAAgCgCgAwJJhQgEgBgCgEQgQgZgOgbQgCgEABgEQABgEAEgCIABAAQADgCAEABQADACACADQAOAaAQAaQACADgBAEQgBAEgEACQgCACgDAAIgCAAgAQtIUIgBAAQgDgCgCgEQgBgEACgEQANgbAMgbQABgEAEgBQAEgCAEACIAAAAQAEACABADQACAEgCAEQgLAcgOAbQgCAEgEABIgDABIgEgBgAxCH3QgEgCgCgDIgXg3QgCgEACgEQABgEAEgBIABgBQAEgBADACQAEABABAEIAXA2QACAEgCAEQgBADgDACIgBABIgEABIgDgBgARdGlQgEgBgBgEQgCgEABgEQALgbAIgdQABgEAEgCQADgCAEABQAEACACADQACAEgBAEQgJAdgKAdQgCADgEACIgEABIgDgBgAxvGHQgEgBgBgEQgKgdgIgdQgBgEACgEQACgEAEgBIABAAQAEgBADACQAEACABAEQAIAdAJAcQABAEgBAEQgCADgEACIAAAAIgEABIgEgCgASCEyIgBAAQgDgBgCgDQgDgEABgEQAHgcAGgeQAAgEAEgCQADgCAEAAIAAAAQAEABADADQACAEgBAEQgFAegHAdQgBAEgEACQgCACgDAAIgCgBgAyQETQgDgDgBgDIgLg7QgBgEADgEQACgDAEgBIABAAQAEAAADACQADACABAEIALA6QABAFgDADQgCADgDABIgBAAIgCAAQgDAAgDgBgASZC9IgBAAQgEgBgCgEQgDgDABgEQAEgdADgeQAAgEADgDQADgCAEAAIABAAQAEAAACADQADAEAAAEQgDAegEAeQgBAEgDACQgDADgDAAIgBAAgAyjCcQgEgCAAgEQgEgegCgeQAAgEADgDQADgEAEAAIAAAAQAEAAADADQADACAAAEQADAeADAdQAAAEgCAEQgDADgEAAIAAAAIgBABQgDAAgDgDgASkBFIAAAAQgEAAgDgDQgDgDAAgEIACg7IAAAAIgBgqQAAgEADgDQADgDAEAAIAAAAQAEAAADADQADADABAEIAAAqIAAAAQAAAegCAeQAAAEgDADQgDADgDAAIgBgBgAyrAkQgDgDgBgEIAAgdIAAgjQABgEADgDQADgDAEAAQAEAAADADQADADgBAEIAAAjIAAAcQABAEgDADQgDADgEAAIgBAAIAAABQgDAAgDgDgAyihVQgEAAgDgDQgDgDAAgEQACgeAEgeQAAgEAEgDQADgCAEAAQAEAAADAEQACADAAAEQgDAegCAdQgBAEgDADQgDADgEAAIAAgBgASchfQgDgDgBgEQgCgegEgeQgBgEADgDQADgDADgBIABAAQAEgBADADQADADABAEQAEAeACAfQABAEgDADQgDADgEAAIAAAAIgBABQgDgBgDgCgAyVjLIAAAAQgEAAgDgEQgCgDABgEQAFgeAGgdQABgEAEgCQADgDAEABQAEABACAEQADADgBAEQgHAdgFAdQAAAEgEADQgCABgDAAIgCAAgASNjXQgDgDgBgEIgMg6QgBgEACgDQADgEAEgBIAAAAQAEgBADACQAEADABAEIAMA7QABAEgDADQgCAEgEAAIAAAAIgCAAQgDAAgDgBgAx8k/QgEgBgCgEQgCgEABgEQAIgdAKgcQABgEADgCQAEgCAEACQAEABACADQACAEgBAEQgKAcgIAdQgBAEgEACIgFABIgCAAgARzlMQgEgCgBgEQgJgdgKgcQgBgEACgEQACgDAEgCIAAAAQAEgBADABQAEACABAEQALAdAIAdQABAEgCAEQgCADgEACIAAAAIgDAAIgEgBgAxXmxIAAAAQgEgCgCgDQgBgEABgEQALgdANgbQACgEADgBQAEgBAEABIAAABQAEABACAEQABAEgCAEQgMAbgLAbQgCAEgDACIgEABIgEgBgARMm+QgEgBgCgEQgLgcgNgbQgCgEABgEQACgDADgCIABAAQADgCAEABQAEABACAEQANAcAMAcQABAEgBAEQgCAEgEABIAAAAIgEABIgDgBgAwmofIAAAAQgDgCgBgDQgCgFACgDQAOgbAQgaQACgDAEgBQAEgBAEACQADACABAEQABAEgCAEQgPAZgOAaQgCAEgEABIgDAAIgFgBgAQZorQgEgBgCgDQgPgagPgaQgDgDABgEQABgEADgCIABgBQADgCAEABQAEABADAEQAQAZAOAbQACAEgBAEQgBAEgEACIAAAAIgEABIgDgBgAvoqGQgEgDgBgEQgBgEADgDIAjgxQACgEAEgBQAFAAADADQADACABAEQABAEgDADIgjAxQgCADgEABIgCAAQgDAAgCgBgAPaqRQgEAAgDgEIgjgwQgDgDABgEQABgEADgDQADgDAEABQAEABADADQATAYARAZQACADgBAEQAAAEgEADQgCABgDAAIgCAAgAuhrmIAAgBQgEgCAAgEQAAgEACgDIAnguQADgDAFAAQAEAAADACQADADAAAEQAAAFgCADIgnAsQgDAEgEAAIgBAAQgDAAgDgCgAOSrwQgEAAgDgDIgngsQgDgDAAgEQAAgEADgDIAAAAQADgDAEAAQAEAAADADIAoAtQADADAAAEQgBAEgDADQgDADgDAAIgBgBgAtQtCQgCgCAAgFQAAgEACgDIArgpQADgDAEABQAEAAADADIAAAAQADADAAAEQAAAEgDADIgqAoQgDADgEAAQgFAAgDgDgAM8tIQgVgVgXgUQgDgDAAgEQAAgEACgDQADgDAEAAQAFgBADADQAWAUAXAXQACACAAAFQAAAEgCACQgDADgFABQgEgBgDgDgArzuPQgDAAgDgDIAAAAQgDgDAAgFQABgEADgCIAvgmQADgCAEAAQAEABADAEIAAAAQADADgBAEQgBAEgDACIguAlQgDADgDAAIgCgBgALjuYIgvglQgDgCgBgEQgBgEADgDQACgEAFgBQAEAAADADIAwAlQADACAAAEQABAFgDADQgCADgFABIgBAAQgDAAgDgDgAqUvWQgEgBgDgEQgCgDABgEQABgEADgCQAZgRAagQQADgCAEABQAEABADADQACAEgBAEQgBAEgEACQgZAPgZARQgDACgCAAIgCAAgAKDvfQgZgQgagPQgEgCgBgFQgBgDACgEIABgBQACgDADgBQAEgBAEACQAaAPAaASQADACABAEQABAEgCADIAAAAQgDAEgDABIgDAAQgCAAgDgCgAovwUQgEgCgCgDIAAgBQgCgDABgEQACgEADgCQAbgOAbgMQAEgCAEABQAEABABAEIAAAAQACAEgBAEQgBAEgEACQgbAMgaAOIgFABIgDAAgAIcwbQgbgOgbgNQgEgCgBgEQgCgDACgEIAAgBQACgDADgBQAEgCAEACQAcAMAbAPQAEABABAEQABAEgBAEIgBAAQgCAEgEABIgDABIgEgBgAnExIQgEgBgBgEQgCgEACgEQABgEAEgBQAdgMAcgKQAEgBAEACQAEACABAEQABAEgBADQgCAEgEACQgdAJgbALIgEABIgEgBgAGvxNQgcgLgcgKQgFgBgCgEQgBgDABgEIAAAAQABgEAEgCQAEgCAEACQAdAJAcALQAEACACAEQABADgBAEIAAAAQgCAEgEACIgDABIgEgBgAlTxvQgEgCgBgEQgBgEACgEQACgEAEgBIA7gPQAEgBAEADQADACABAEQABAEgCADQgCAEgEABIg6APIgDAAIgFgBgAE+xzIg7gOQgEgBgCgDQgCgDABgFIAAAAQABgEADgCQAEgCAEABIA6AOQAEABADADQACAEgBAEIAAAAQgBAEgEACQgCACgDAAIgCgBgAjfyKQgDgDgBgEIAAAAQAAgEACgDQACgEAEAAQAfgGAegEQAEAAAEADQADACABAEQAAAEgDAEQgCADgEABQgeADgeAFIgCAAQgDAAgDgBgADJyLIg7gIQgEAAgDgEQgCgDAAgEIAAgBQABgDADgDQADgCAEAAIA8AIQAEABADADQACADAAAEIAAAAQgBAFgEACQgCACgEAAIgBAAgAhmyaQgEgDAAgEQAAgEADgDQACgDAEAAIA8gEQAEAAADADQADADAAAEQABAEgDADQgDADgEABIg7ACIgBABQgEAAgCgDgABTyYQgegCgdgBQgEAAgDgDQgDgDAAgEIAAAAQAAgEADgDQADgDAEAAQAeAAAeADQAEAAADADQADADAAAEQgBAEgDADQgDADgEAAIAAAAg");
	this.shape_1.setTransform(-0.0024,0.0061,1.04,1.04);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAASmIglAAIAAgBQAAgEgDgDQgCgDgFAAQgdgBgdgDQgFAAgDADQgDADAAAEIAAAAIgogEIAAgBQABgEgDgDQgCgDgFgBIg5gJQgFgBgDADQgDACgBAEIAAABIgngIIAAgBQABgEgCgDQgCgEgFgBIg4gPQgFgBgDACQgEACgBAEIAAABIgmgNIAAAAQACgEgCgEQgCgEgEgBQgcgKgbgLQgEgCgDACQgEABgCAEIAAABIglgQIABgBQACgEgCgEQgBgEgEgBQgbgNgagOQgEgCgEACQgEABgCADIAAABIgigUIAAAAQACgEgBgEQAAgEgEgCQgZgPgZgRQgEgDgEABQgEABgCADIgggXQADgDgBgEQAAgEgEgCIgugmQgDgCgEAAQgEAAgDADIgegbQACgDAAgEQAAgEgDgDIglgkIgJgJQgDgCgEgBQgEABgDACIgbgcQADgDAAgEQAAgEgCgDIgngsQgCgEgEAAQgEAAgDACIgYgfQADgCAAgEQABgEgDgDQgSgYgQgZQgCgDgEgBQgEgBgDACIgWgiQAEgCABgEQABgEgCgDQgQgagNgaQgCgDgEgCQgEgBgDACIgSgkQADgCACgDQABgEgBgEIgYg2QgBgEgEgBQgDgCgEABIgNglQADgCACgDQACgEgCgEQgJgcgIgdQgBgEgEgCQgDgCgDABIgKgnQADgBACgDQADgDgBgFIgLg6QgBgEgDgCQgDgCgEAAIgFgoQAEAAACgDQADgEgBgEQgDgdgCgeQgBgEgDgCQgDgDgDAAIgCgpIAAAAQAEAAADgDQADgDAAgEIgBgcIABgjQAAgEgDgDQgDgDgEAAIACgoQAEABADgDQADgDABgEQACgdADgeQABgEgDgDQgCgEgFAAIAGgnQAEABAEgCQADgDAAgEQAGgdAGgdQABgEgCgDQgCgEgEgBIAJgmQAEABAEgCQADgCABgEQAIgdAKgcQABgEgCgEQgCgDgEgBIAOgmQAEABAEgBQAEgCABgEQALgbAMgbQACgEgBgEQgCgEgDgBIASglQADACAEgBQAEgBACgEQAOgaAPgZQACgEgBgEQAAgEgEgCIAWgiQADACAEgBQAEgBADgDIAigxQADgDgBgEQAAgEgEgCIAZggIAAABQADACAEAAQAEAAADgEIAngsQACgDAAgFQAAgEgDgDIAegfQADADAEAAQAEAAADgDIAqgoQADgDAAgEQAAgEgCgDIAdgaQADADAEAAQAEABADgDIAuglQAEgCAAgEQABgEgDgDIAggYQADAEAEABQAEABADgDQAZgRAZgPQAEgCABgEQABgEgCgEIAjgUIAAABQABADAEACQAEABAEgCQAagOAbgMQAEgCABgEQACgEgCgEIAAAAIAkgQQACAEADABQAEACAEgCQAcgLAcgJQAEgCACgEQACgDgCgEIAmgMQACAEADACQAEACAEgBIA6gPQAEgBACgEQACgDAAgEIAmgIIAAAAQABAEAEADQADACAEgBQAegFAegDQAEgBADgDQACgEAAgEIAogEQABAEADADQADADAEgBIA7gCQAEgBADgDQADgDAAgEIAaAAIAOAAQAAAEADADQADADAEAAQAeABAdACQAEAAADgDQADgDABgEIAnADIAAABQAAAEADADQACAEAEAAIA7AIQAEABAEgDQADgCABgFIAAAAIAnAHQgBAFACADQACADAEABIA7AOQAEABADgCQAEgCABgEIAmAMIAAAAQgBAEACADQACAEAEABQAcAKAcALQAEABAEgBQAEgCABgEIAAAAIAmAPIgBABQgBAEABADQABAEAEACQAbANAbAOQAEABAEgBQAEgBACgEIAAAAIAjATIAAABQgDAEACADQABAFADACQAaAPAZAQQAEADAEgBQAEgBACgEIAAAAIAhAYQgCADAAAEQABAEADACIAwAlQADADAEAAQAEgBACgDIAfAaQgDADAAAEQAAAEAEADQAWAUAWAVQADADAEABQAEgBADgDIAaAbQgEADAAAEQAAAEADADIAnAsQADADAEAAQAEABADgDIAZAfQgDADgBAEQAAAEACADIAjAwQADAEAEAAQAEABAEgCIAWAiQgEACAAAEQgBAEACADQAQAaAOAaQACADAEABQAEACADgCIATAkQgEACgBADQgCAEACAEQANAbALAcQACAEAEABQAEACADgCIAPAmQgEACgCADQgCAEACAEQAKAcAIAdQABAEAEACQADACAEgBIALAnQgEABgCAEQgCADAAAEIANA6QAAAEADADQAEACAEgBIAGApQgEABgDADQgCADAAAEQAEAeADAeQAAAEADADQADADAEgBIACApQgEAAgCADQgDADAAAEIAAAqIAAAAIgBA7QAAAEACADQADADAEAAIABAAIgDAoIgBAAQgEAAgDACQgDADAAAEQgDAegEAdQAAAEACADQADAEAEABIgHAnQgEAAgDACQgDACgBAEQgGAegGAcQgBAEACAEQACADADABIgLAnQgDgBgEACQgEACgBAEQgIAdgLAbQgBAEACAEQABAEAEABIgPAmIAAAAQgEgCgEACQgDABgCAEQgLAbgOAbQgCAEACAEQABAEAEACIAAAAIgTAkIgBgBQgDgCgEACQgEABgCADQgOAagQAZQgCAEAAAEQABAEAEACIgXAhQgDgCgEABQgEAAgCAEIgkAwQgDADAAAEQABAEADADIAAAAIgaAgQgDgDgEABQgFAAgCADIgoAsQgDADAAAEQAAAEADADIgQAQIgKAKQgDgCgEgBQgEAAgDADIgrApQgEACAAAFQAAADACADIgeAaQgCgDgEAAQgEgBgDADIgwAkQgDACAAAFQgBADACADIghAXQgCgDgEgBQgEgBgEACQgZAQgZAPQgEACgBAFQgBADACAEIgjATQgCgEgEgBQgEgBgDABQgbAOgbAMQgEABgBAEQgCAEACAEIglAPQgCgEgDgBQgEgCgEABQgcALgcAJQgEABgBADQgCAEABAEIgnALQgBgEgDgCQgEgCgEABQgdAHgdAGQgEABgCAEQgCADABAEIgnAHQgBgEgDgDQgEgCgEAAQgeAFgeADQgEAAgCAEQgDADAAAEIAAAAIgoAEQAAgFgDgCQgDgDgEAAIg8ACQgFAAgDADQgCADAAAEIgEAAg");
	this.shape_2.setTransform(-0.0284,0.0061,1.04,1.04);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_sticker1, new cjs.Rectangle(-124.7,-124.7,249.5,249.5), null);


(lib.btn_show = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASCBIgQh9QgCAigGAjIgJA4IhWAAIghkCIBEAAIARCUIASiUIBAAAIAQCUQAEhAAOhUIBEAAIggECg");
	this.shape.setTransform(32.05,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqCBQgTgGgJgMQgLgLgEgRQgFgQABghIAAhCQAAgkAHgUQAIgVAVgMQAUgMAfAAQAaAAATAIQAUAIAKAMQAKANAEAOQAEANAAAcIAAA+QAAAjgEAQQgDARgMAOQgLAOgTAHQgRAGgYAAQgZAAgSgFgAgIhSQgDAFAAAUIAAB0QAAASADAGQADAGAFAAQAHAAADgGQACgFAAgQIAAh3QAAgUgCgFQgCgFgHAAQgHAAgCAFg");
	this.shape_1.setTransform(6.4,2.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMCeIAAi2QAAgWgCgHQgCgGgIAAQgGAAgDAGQgCAHAAAUIAAC4IhPAAIAAk7IBPAAIAABHQAKgJALgFQAMgFANAAQAVAAAOALQAPAKADAOQADAOAAAlIAACxg");
	this.shape_2.setTransform(-16.225,0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguB9QgVgJgIgQQgIgQAAghIAAgMIBGAAIAAAQQAAAVACAGQADAHAIAAQAHAAADgFQAEgEAAgNQAAgTgFgFQgEgEgpgXQgigTgIgQQgIgQAAgWQAAgfAJgOQAIgPAUgIQATgIAaAAQAZAAASAHQASAGAKALQAJAKACAKQACAJAAATIAAAPIhFAAIAAgOQAAgSgCgEQgDgFgHAAQgGAAgEAEQgDAFAAAIQAAAMACAGQABAFAJAHQAHAHAaAMQAiARALAOQALAPAAAcQAAAggJAQQgIAQgTAJQgTAIgcAAQgdAAgVgJg");
	this.shape_3.setTransform(-38.125,2.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ApwEsQjIAAAAjIIAAjHQAAjIDIAAIThAAQDIAAAADIIAADHQAADIjIAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0066").s().p("AASCBIgQh9QgCAigGAjIgJA4IhWAAIghkCIBEAAIARCUIASiUIBAAAIAQCUQAEhAAOhUIBEAAIggECg");
	this.shape_5.setTransform(32.05,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0066").s().p("AgqCBQgTgGgJgMQgLgLgEgRQgFgQABghIAAhCQAAgkAHgUQAIgVAVgMQAUgMAfAAQAaAAATAIQAUAIAKAMQAKANAEAOQAEANAAAcIAAA+QAAAjgEAQQgDARgMAOQgLAOgTAHQgRAGgYAAQgZAAgSgFgAgIhSQgDAFAAAUIAAB0QAAASADAGQADAGAFAAQAHAAADgGQACgFAAgQIAAh3QAAgUgCgFQgCgFgHAAQgHAAgCAFg");
	this.shape_6.setTransform(6.4,2.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0066").s().p("AAMCeIAAi2QAAgWgCgHQgCgGgIAAQgGAAgDAGQgCAHAAAUIAAC4IhPAAIAAk7IBPAAIAABHQAKgJALgFQAMgFANAAQAVAAAOALQAPAKADAOQADAOAAAlIAACxg");
	this.shape_7.setTransform(-16.225,0.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0066").s().p("AguB9QgVgJgIgQQgIgQAAghIAAgMIBGAAIAAAQQAAAVACAGQADAHAIAAQAHAAADgFQAEgEAAgNQAAgTgFgFQgEgEgpgXQgigTgIgQQgIgQAAgWQAAgfAJgOQAIgPAUgIQATgIAaAAQAZAAASAHQASAGAKALQAJAKACAKQACAJAAATIAAAPIhFAAIAAgOQAAgSgCgEQgDgFgHAAQgGAAgEAEQgDAFAAAIQAAAMACAGQABAFAJAHQAHAHAaAMQAiARALAOQALAPAAAcQAAAggJAQQgIAQgTAJQgTAIgcAAQgdAAgVgJg");
	this.shape_8.setTransform(-38.125,2.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASCBIgQh8QgCAigGAiIgJA4IhWAAIghkBIBEAAIARCTIASiTIBAAAIAQCTQAEhAAOhTIBEAAIgfEBg");
	this.shape_9.setTransform(30.05,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgqCBQgTgGgKgMQgJgLgFgRQgFgQAAghIAAhCQABgkAHgUQAJgVATgMQAVgMAfAAQAaAAATAIQAUAIAJAMQALANAEAOQADANAAAcIAAA+QAAAjgDAQQgEARgLAOQgMAOgSAHQgRAGgYAAQgZAAgSgFgAgIhSQgCAFgBAUIAAB0QABASACAGQACAGAGAAQAHAAACgGQADgFAAgQIAAh3QAAgUgDgFQgBgFgIAAQgFAAgDAFg");
	this.shape_10.setTransform(4.4,4.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAMCeIAAi1QAAgXgCgHQgCgGgIAAQgGAAgDAGQgCAHAAAUIAAC4IhPAAIAAk7IBPAAIAABHQAKgJALgFQAMgFANAAQAVAAAOALQAPAKADAOQADAOAAAkIAACyg");
	this.shape_11.setTransform(-18.225,2.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AguB9QgVgJgIgQQgIgQAAghIAAgMIBGAAIAAAQQAAAVACAGQADAHAIAAQAHAAADgFQAEgEAAgNQAAgTgFgFQgEgEgpgXQgigTgIgQQgIgQAAgWQAAgfAJgOQAIgPAUgIQATgIAaAAQAZAAASAHQASAGAKALQAJAKACAKQACAJAAATIAAAPIhFAAIAAgOQAAgSgCgEQgDgFgHAAQgGAAgEAEQgDAFAAAIQAAAMACAGQABAFAJAHQAHAHAaAMQAiARALAOQALAPAAAcQAAAggJAQQgIAQgTAJQgTAIgcAAQgdAAgVgJg");
	this.shape_12.setTransform(-40.125,4.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{x:0,y:0}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4,p:{x:0,y:0}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4,p:{x:-2,y:2}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_4,p:{x:0,y:0}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-30,167,62);


(lib.btn_hide = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpB/QgTgHgLgNQgKgMgEgPQgFgPAAgdIAAhLQAAgiAKgTQAJgUAVgLQAVgKAbAAQAgAAAWANQAVAMAJAVQAJAVAAAlIAAAiIhmAAIAAA4QAAARADAFQACAGAHAAQAJAAADgHQADgHAAgTIAAgiIBLAAIAAATQAAAYgDANQgEAMgLAPQgLAPgRAHQgRAHgaAAQgYAAgTgHgAgJhSQgCAFAAAWIAAATIAWAAIAAgTQAAgUgCgGQgCgGgHAAQgHAAgCAFg");
	this.shape.setTransform(28.275,2.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhECXQgOgKgEgNQgEgMAAgdIAAh4QAAgeAEgNQAEgMAOgKQANgJATAAQAPAAAMAFQALAFAKALIAAhJIBPAAIAAE7IhPAAIAAgTQgLAMgMAGQgMAFgOAAQgSAAgNgJgAgIg5QgDAFAAAPIAAB+QAAAQADAFQACAFAGAAQAHAAADgGQACgGAAgVIAAh3QAAgOgCgFQgCgFgIAAQgGAAgCAEg");
	this.shape_1.setTransform(5.5,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoCeIAAkCIBRAAIAAECgAgoh0IAAgpIBRAAIAAApg");
	this.shape_2.setTransform(-12.225,0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMCeIAAi2QAAgWgCgHQgCgGgIAAQgGAAgDAGQgCAHAAAUIAAC4IhPAAIAAk7IBPAAIAABHQAKgJALgFQAMgFANAAQAVAAAOALQAPAKADAOQADAOAAAlIAACxg");
	this.shape_3.setTransform(-30.125,0.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ApwEsQjIAAAAjIIAAjHQAAjIDIAAIThAAQDIAAAADIIAADHQAADIjIAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FF33").s().p("AgpB/QgTgHgLgNQgKgMgEgPQgFgPAAgdIAAhLQAAgiAKgTQAJgUAVgLQAVgKAbAAQAgAAAWANQAVAMAJAVQAJAVAAAlIAAAiIhmAAIAAA4QAAARADAFQACAGAHAAQAJAAADgHQADgHAAgTIAAgiIBLAAIAAATQAAAYgDANQgEAMgLAPQgLAPgRAHQgRAHgaAAQgYAAgTgHgAgJhSQgCAFAAAWIAAATIAWAAIAAgTQAAgUgCgGQgCgGgHAAQgHAAgCAFg");
	this.shape_5.setTransform(28.275,2.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33FF33").s().p("AhECXQgOgKgEgNQgEgMAAgdIAAh4QAAgeAEgNQAEgMAOgKQANgJATAAQAPAAAMAFQALAFAKALIAAhJIBPAAIAAE7IhPAAIAAgTQgLAMgMAGQgMAFgOAAQgSAAgNgJgAgIg5QgDAFAAAPIAAB+QAAAQADAFQACAFAGAAQAHAAADgGQACgGAAgVIAAh3QAAgOgCgFQgCgFgIAAQgGAAgCAEg");
	this.shape_6.setTransform(5.5,0.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33FF33").s().p("AgoCeIAAkCIBRAAIAAECgAgoh0IAAgpIBRAAIAAApg");
	this.shape_7.setTransform(-12.225,0.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33FF33").s().p("AAMCeIAAi2QAAgWgCgHQgCgGgIAAQgGAAgDAGQgCAHAAAUIAAC4IhPAAIAAk7IBPAAIAABHQAKgJALgFQAMgFANAAQAVAAAOALQAPAKADAOQADAOAAAlIAACxg");
	this.shape_8.setTransform(-30.125,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{x:0,y:0}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4,p:{x:0,y:0}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4,p:{x:-2,y:2}}]},1).to({state:[{t:this.shape_4,p:{x:0,y:0}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-30,167,62);


// stage content:
(lib.showandhide = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.sticker1_mc.visible = false;
		this.sticker2_mc.visible = false;
		
		
		
		/*show button*/
		this.show_btn.addEventListener("click", fl_ClickToHide.bind(this));
		
		function fl_ClickToHide()
		{
			this.sticker1_mc.visible = true;
		}
		
		
		this.show_btn.addEventListener("click", fl_ClickToHide_3.bind(this));
		
		function fl_ClickToHide_3()
		{
			this.sticker2_mc.visible = true;
		}
		
		
		
		
		/*hide button*/
		this.hide_btn.addEventListener("click", fl_ClickToHide_2.bind(this));
		
		function fl_ClickToHide_2()
		{
			this.sticker1_mc.visible = false;
		}
		
		this.hide_btn.addEventListener("click", fl_ClickToHide_4.bind(this));
		
		function fl_ClickToHide_4()
		{
			this.sticker2_mc.visible = false;
		}
		
		
		
		/* Click to Hide an Object
		Clicking on the specified symbol instance hides it.
		
		Instructions:
		1. Use this code for objects that are currently visible.
		*/
		this.sticker2_mc.addEventListener("click", fl_ClickToHide_5.bind(this));
		
		function fl_ClickToHide_5()
		{
			this.sticker2_mc.visible = false;
		}
		
		/* Click to Hide an Object
		Clicking on the specified symbol instance hides it.
		
		Instructions:
		1. Use this code for objects that are currently visible.
		*/
		this.sticker1_mc.addEventListener("click", fl_ClickToHide_6.bind(this));
		
		function fl_ClickToHide_6()
		{
			this.sticker1_mc.visible = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// sticker2
	this.sticker2_mc = new lib.mc_sticker2();
	this.sticker2_mc.name = "sticker2_mc";
	this.sticker2_mc.setTransform(138.8,255.75);

	this.timeline.addTween(cjs.Tween.get(this.sticker2_mc).wait(1));

	// sticker
	this.sticker1_mc = new lib.mc_sticker1();
	this.sticker1_mc.name = "sticker1_mc";
	this.sticker1_mc.setTransform(232.95,158);

	this.timeline.addTween(cjs.Tween.get(this.sticker1_mc).wait(1));

	// show
	this.show_btn = new lib.btn_show();
	this.show_btn.name = "show_btn";
	this.show_btn.setTransform(536.5,96.05);
	new cjs.ButtonHelper(this.show_btn, 0, 1, 2, false, new lib.btn_show(), 3);

	this.timeline.addTween(cjs.Tween.get(this.show_btn).wait(1));

	// hide
	this.hide_btn = new lib.btn_hide();
	this.hide_btn.name = "hide_btn";
	this.hide_btn.setTransform(536.5,179.05);
	new cjs.ButtonHelper(this.hide_btn, 0, 1, 2, false, new lib.btn_hide(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hide_btn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(388.1,273.3,230.89999999999998,53.19999999999999);
// library properties:
lib.properties = {
	id: '7F462D194CA3844696C1A313C165C880',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FF9966",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7F462D194CA3844696C1A313C165C880'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;