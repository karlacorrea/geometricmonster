
gdjs.evtsExt__StayOnScreen__StayOnScreen = gdjs.evtsExt__StayOnScreen__StayOnScreen || {};

/**
 * Behavior generated from Stay on Screen
 * @class StayOnScreen
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.MarginTop = behaviorData.MarginTop !== undefined ? behaviorData.MarginTop : Number("0") || 0;
    this._behaviorData.MarginBottom = behaviorData.MarginBottom !== undefined ? behaviorData.MarginBottom : Number("0") || 0;
    this._behaviorData.MarginLeft = behaviorData.MarginLeft !== undefined ? behaviorData.MarginLeft : Number("0") || 0;
    this._behaviorData.MarginRight = behaviorData.MarginRight !== undefined ? behaviorData.MarginRight : Number("0") || 0;
};

gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("StayOnScreen::StayOnScreen", gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen);

// Hot-reload:
gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.updateFromBehaviorData = function(oldBehaviorData, newBehaviorData) {

    if (oldBehaviorData.MarginTop !== newBehaviorData.MarginTop)
        this._behaviorData.MarginTop = newBehaviorData.MarginTop;
    if (oldBehaviorData.MarginBottom !== newBehaviorData.MarginBottom)
        this._behaviorData.MarginBottom = newBehaviorData.MarginBottom;
    if (oldBehaviorData.MarginLeft !== newBehaviorData.MarginLeft)
        this._behaviorData.MarginLeft = newBehaviorData.MarginLeft;
    if (oldBehaviorData.MarginRight !== newBehaviorData.MarginRight)
        this._behaviorData.MarginRight = newBehaviorData.MarginRight;

    return true;
}

// Properties:
gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].setX(Math.min(Math.max((gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].getX()), gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].getLayer()), 0) - gdjs.evtTools.camera.getCameraWidth(runtimeScene, (gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].getLayer()), 0) / 2 + (gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMarginLeft())), gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].getLayer()), 0) + gdjs.evtTools.camera.getCameraWidth(runtimeScene, (gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].getLayer()), 0) / 2 - (gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMarginRight())));
}
}{for(var i = 0, len = gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].setY(Math.min(Math.max((gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].getY()), gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].getLayer()), 0) - gdjs.evtTools.camera.getCameraHeight(runtimeScene, (gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].getLayer()), 0) / 2 + (gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMarginTop())), gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].getLayer()), 0) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, (gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].getLayer()), 0) / 2 - (gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMarginBottom())));
}
}}

}


};

gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};

// Methods:

gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype._getMarginTop = function() {
    return this._behaviorData.MarginTop !== undefined ? this._behaviorData.MarginTop : Number("0") || 0;
};
gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype._setMarginTop = function(newValue) {
    this._behaviorData.MarginTop = newValue;
};
gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype._getMarginBottom = function() {
    return this._behaviorData.MarginBottom !== undefined ? this._behaviorData.MarginBottom : Number("0") || 0;
};
gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype._setMarginBottom = function(newValue) {
    this._behaviorData.MarginBottom = newValue;
};
gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype._getMarginLeft = function() {
    return this._behaviorData.MarginLeft !== undefined ? this._behaviorData.MarginLeft : Number("0") || 0;
};
gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype._setMarginLeft = function(newValue) {
    this._behaviorData.MarginLeft = newValue;
};
gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype._getMarginRight = function() {
    return this._behaviorData.MarginRight !== undefined ? this._behaviorData.MarginRight : Number("0") || 0;
};
gdjs.evtsExt__StayOnScreen__StayOnScreen.StayOnScreen.prototype._setMarginRight = function(newValue) {
    this._behaviorData.MarginRight = newValue;
};
