'use strict';
function removeElemTrigger(trigger, isRemoveTrigger) {
    if(isRemoveTrigger) {
        trigger.remove();
    }
}

export default removeElemTrigger;