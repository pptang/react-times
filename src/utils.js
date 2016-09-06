import moment from 'moment';

export const mousePosition = (e) => {
  let xPos, yPos;
  e = e || window.event;
  if (e.pageX) {
    xPos = e.pageX;
    yPos = e.pageY;
  } else {
    xPos = e.clientX + document.body.scrollLeft - document.body.clientLeft;
    yPos = e.clientY + document.body.scrollTop - document.body.clientTop;
  }
  return {
    x: xPos,
    y: yPos
  }
};

export const disableMouseDown = (e) => {
  let event = e || window.event;
  event.preventDefault();
  event.stopPropagation();
};

export const getInlineRotateStyle = (degree) => {
  return {
    'transform': `translateX(-50%) rotate(${degree}deg)`,
    'OTransform': `translateX(-50%) rotate(${degree}deg)`,
    'MozTransform': `translateX(-50%) rotate(${degree}deg)`,
    'Mstransform': `translateX(-50%) rotate(${degree}deg)`,
    'WebkitTransform': `translateX(-50%) rotate(${degree}deg)`
  }
};

export const getInitialPointerStyle = (height, top, degree) => {
  return {
    'height': `${height}px`,
    'top': `${top}px`,
    'transform': `translateX(-50%) rotate(${degree}deg)`,
    'OTransform': `translateX(-50%) rotate(${degree}deg)`,
    'MozTransform': `translateX(-50%) rotate(${degree}deg)`,
    'Mstransform': `translateX(-50%) rotate(${degree}deg)`,
    'WebkitTransform': `translateX(-50%) rotate(${degree}deg)`
  }
};

export const degree2Radian = (degree) => {
  return degree * (2 * Math.PI) / 360;
};

export const initialTime = (defaultTime) => {
  let [hour, minute] = moment().format("HH:mm").split(':');
  if (defaultTime) {
    [hour, minute] = `${defaultTime}`.split(':');
    hour = getValidateTime(hour);
    minute = getValidateTime(minute);
  }
  return [hour, minute];
}

export const getValidateTime = (time) => {
  if (typeof time === 'undefined') { time = 0 }
  if (isNaN(parseInt(time))) { time = 0 }
  if (parseInt(time) < 10) { time = `0${time}` }
  return time;
};