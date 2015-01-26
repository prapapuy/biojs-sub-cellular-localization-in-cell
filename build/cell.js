require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var data = {};

data.arch = [

"M 207.00,130.00 "
           + "C 207.00,130.00 220.00,130.00 220.00,130.00 "
             + "220.00,130.00 241.00,131.00 241.00,131.00 "
             + "241.00,131.00 258.00,132.00 258.00,132.00 "
             + "288.45,132.05 326.67,130.07 356.00,134.92 "
             + "370.17,137.26 388.19,141.37 400.00,149.79 "
             + "420.32,164.26 437.24,198.88 424.60,223.00 "
             + "420.80,230.25 413.82,236.59 407.00,240.95 "
             + "378.02,259.44 340.69,264.78 307.00,267.09 "
             + "307.00,267.09 295.00,268.00 295.00,268.00 "
             + "295.00,268.00 276.00,269.00 276.00,269.00 "
             + "276.00,269.00 248.00,269.00 248.00,269.00 "
             + "248.00,269.00 236.00,268.09 236.00,268.09 "
             + "208.12,266.18 180.77,262.34 154.00,254.02 "
             + "134.44,247.95 122.10,243.44 105.00,231.43 "
             + "97.95,226.48 91.03,220.40 86.47,213.00 "
             + "76.85,197.41 75.15,167.59 87.33,153.00 "
             + "95.53,143.17 111.77,138.12 124.00,135.42 "
             + "135.36,132.92 155.55,130.02 167.00,130.00 "
             + "173.01,129.99 179.03,130.27 185.00,129.42 "
             + "194.21,128.30 198.33,129.99 207.00,130.00 Z "
           + "M 104.04,155.79 "
           + "C 87.51,168.18 89.68,195.71 100.63,211.00 "
             + "106.57,219.29 117.16,226.21 126.00,231.14 "
             + "141.43,239.75 158.94,243.66 176.00,247.42 "
             + "203.68,253.53 214.14,255.96 243.00,256.00 "
             + "243.00,256.00 258.00,257.00 258.00,257.00 "
             + "258.00,257.00 280.00,257.00 280.00,257.00 "
             + "280.00,257.00 297.00,256.00 297.00,256.00 "
             + "313.14,255.97 331.08,253.29 347.00,250.42 "
             + "362.68,247.60 380.42,243.60 394.00,234.91 "
             + "402.14,229.70 407.03,225.91 411.33,217.00 "
             + "421.83,195.26 406.42,167.19 387.00,156.17 "
             + "363.54,142.86 330.28,143.96 304.00,144.00 "
             + "304.00,144.00 292.00,144.95 292.00,144.95 "
             + "292.00,144.95 273.00,144.95 273.00,144.95 "
             + "273.00,144.95 258.00,144.00 258.00,144.00 "
             + "258.00,144.00 189.00,143.14 189.00,143.14 "
             + "189.00,143.14 158.00,143.14 158.00,143.14 "
             + "141.39,145.67 117.68,145.56 104.04,155.79 Z",

             "M 29.00,1.00 "
           + "C 29.00,1.00 46.00,0.00 46.00,0.00 "
             + "46.00,0.00 167.00,0.00 167.00,0.00 "
             + "167.00,0.00 182.00,1.00 182.00,1.00 "
             + "182.00,1.00 361.00,1.00 361.00,1.00 "
             + "361.00,1.00 442.00,1.00 442.00,1.00 "
             + "442.00,1.00 457.00,2.00 457.00,2.00 "
             + "457.00,2.00 500.00,2.00 500.00,2.00 "
             + "500.00,2.00 500.00,62.00 500.00,62.00 "
             + "500.00,62.00 499.00,79.00 499.00,79.00 "
             + "499.00,79.00 499.00,259.00 499.00,259.00 "
             + "499.00,259.00 500.00,274.00 500.00,274.00 "
             + "500.00,274.00 500.00,398.00 500.00,398.00 "
             + "500.00,398.00 283.00,398.00 283.00,398.00 "
             + "283.00,398.00 174.00,398.00 174.00,398.00 "
             + "174.00,398.00 159.00,399.00 159.00,399.00 "
             + "159.00,399.00 0.00,399.00 0.00,399.00 "
             + "0.00,399.00 0.00,291.00 0.00,291.00 "
             + "0.00,291.00 1.00,276.00 1.00,276.00 "
             + "1.00,276.00 1.00,1.00 1.00,1.00 "
             + "1.00,1.00 29.00,1.00 29.00,1.00 Z "
           + "M 94.00,148.39 "
           + "C 80.03,159.40 80.82,171.04 81.00,187.00 "
             + "81.25,208.16 94.87,224.21 112.00,235.30 "
             + "136.87,251.40 166.06,258.34 195.00,262.42 "
             + "195.00,262.42 246.00,268.00 246.00,268.00 "
             + "246.00,268.00 275.00,268.00 275.00,268.00 "
             + "275.00,268.00 292.00,267.00 292.00,267.00 "
             + "311.82,266.97 331.58,263.49 351.00,259.80 "
             + "359.98,258.10 383.26,252.57 391.00,249.10 "
             + "394.44,247.55 400.75,243.52 404.00,241.33 "
             + "410.15,237.18 420.65,227.73 423.64,221.00 "
             + "425.34,217.16 426.51,208.34 426.82,204.00 "
             + "427.08,200.28 426.12,196.62 425.40,193.00 "
             + "421.93,175.63 412.44,158.89 397.00,149.46 "
             + "381.42,139.95 362.82,136.92 345.00,134.72 "
             + "345.00,134.72 327.00,133.00 327.00,133.00 "
             + "327.00,133.00 307.00,133.00 307.00,133.00 "
             + "307.00,133.00 241.00,133.00 241.00,133.00 "
             + "241.00,133.00 219.00,132.00 219.00,132.00 "
             + "219.00,132.00 204.00,131.14 204.00,131.14 "
             + "204.00,131.14 159.00,131.14 159.00,131.14 "
             + "138.22,134.29 111.01,134.97 94.00,148.39 Z", 

             "M 216.00,143.21 "
           + "C 216.00,143.21 233.00,144.00 233.00,144.00 "
             + "233.00,144.00 258.00,144.00 258.00,144.00 "
            + "258.00,144.00 270.00,144.95 270.00,144.95 "
             + "270.00,144.95 288.00,144.95 288.00,144.95 "
             + "288.00,144.95 303.00,144.00 303.00,144.00 "
             + "329.79,143.96 361.74,142.74 386.00,155.63 "
             + "405.99,166.25 421.96,194.98 411.33,217.00 "
             + "407.30,225.36 403.43,228.43 396.00,233.56 "
             + "382.00,243.23 363.51,247.45 347.00,250.42 "
             + "329.76,253.53 312.52,255.80 295.00,256.00 "
             + "295.00,256.00 282.00,257.00 282.00,257.00 "
             + "282.00,257.00 258.00,257.00 258.00,257.00 "
             + "258.00,257.00 248.00,256.04 248.00,256.04 "
             + "248.00,256.04 232.00,256.04 232.00,256.04 "
             + "212.78,255.97 193.63,251.54 175.00,247.23 "
             + "175.00,247.23 164.00,245.10 164.00,245.10 "
             + "153.90,242.64 137.10,237.01 128.00,232.22 "
             + "118.65,227.30 106.81,219.62 100.63,211.00 "
             + "89.85,195.94 87.62,169.39 103.09,156.53 "
             + "116.13,145.68 140.63,145.76 157.00,143.21 "
             + "157.00,143.21 216.00,143.21 216.00,143.21 Z "
           + "M 183.00,181.27 "
           + "C 178.83,178.64 178.40,176.55 173.00,174.00 "
             + "167.73,182.30 170.09,179.42 168.00,188.00 "
             + "165.69,186.69 161.02,183.73 158.31,184.70 "
             + "154.87,185.94 155.70,197.23 156.85,199.98 "
             + "158.84,204.75 165.60,207.57 170.00,210.00 "
             + "170.00,210.00 172.00,206.00 172.00,206.00 "
             + "176.63,206.14 177.62,205.42 179.00,201.00 "
             + "182.31,204.31 185.39,207.34 188.34,211.00 "
             + "189.80,212.82 191.81,215.88 194.09,216.64 "
             + "197.26,217.69 200.66,214.75 203.00,213.00 "
             + "209.47,220.12 212.50,215.07 218.00,216.06 "
             + "222.88,216.93 223.93,221.99 233.00,220.87 "
             + "238.39,220.20 240.62,216.68 243.42,216.51 "
             + "246.65,216.31 249.61,220.59 258.00,220.96 "
             + "262.68,221.17 269.86,220.22 273.90,217.78 "
             + "277.05,215.87 277.64,213.68 280.21,212.60 "
             + "282.26,211.74 285.56,212.19 288.00,211.73 "
             + "288.00,211.73 295.00,209.30 295.00,209.30 "
             + "300.43,207.99 301.06,211.62 305.09,213.69 "
             + "306.97,214.65 308.92,214.87 311.00,214.96 "
             + "318.23,215.27 320.63,213.25 324.00,207.00 "
             + "326.40,207.80 333.05,209.76 334.79,210.93 "
             + "337.78,212.93 339.69,217.96 343.96,217.04 "
             + "350.60,215.60 347.98,206.37 350.02,203.31 "
             + "352.10,200.20 358.62,201.00 362.00,201.00 "
             + "362.00,201.00 361.43,187.43 361.43,187.43 "
             + "361.43,187.43 359.71,185.81 359.71,185.81 "
             + "359.71,185.81 349.91,182.96 349.91,182.96 "
             + "349.91,182.96 347.00,184.00 347.00,184.00 "
             + "346.23,183.02 345.77,182.18 344.78,181.32 "
             + "338.50,175.86 334.72,184.40 330.00,185.10 "
             + "330.00,185.10 323.00,184.09 323.00,184.09 "
             + "317.22,183.93 308.89,186.01 304.00,189.00 "
             + "304.32,187.68 304.72,186.38 304.76,185.00 "
             + "305.12,173.31 291.64,183.07 287.00,183.79 "
             + "280.15,184.86 274.10,183.39 267.00,187.84 "
             + "263.59,189.98 261.11,193.43 258.00,196.00 "
             + "258.00,196.00 258.00,189.00 258.00,189.00 "
             + "258.00,189.00 241.00,191.00 241.00,191.00 "
             + "241.00,191.00 244.00,187.00 244.00,187.00 "
             + "233.85,183.23 233.10,183.03 233.00,175.00 "
             + "233.00,175.00 224.00,176.61 224.00,176.61 "
             + "220.71,176.54 202.87,169.36 198.06,179.10 "
             + "196.49,182.31 198.71,184.63 198.83,187.42 "
             + "198.83,187.42 197.00,198.00 197.00,198.00 "
             + "184.77,192.16 185.74,194.85 182.08,193.26 "
             + "178.62,191.77 179.04,189.08 180.63,188.69 "
             + "182.26,188.29 185.43,190.63 187.00,191.16 "
             + "190.53,192.85 191.63,192.39 195.00,191.16 "
             + "192.15,181.45 189.14,185.13 183.00,181.27 Z "
           + "M 213.00,180.00 "
           + "C 208.13,180.62 205.54,182.72 201.00,181.00 "
             + "205.47,178.57 208.48,176.69 213.00,180.00 Z "
           + "M 176.00,181.00 "
           + "C 176.00,181.00 177.00,185.00 177.00,185.00 "
             + "177.00,185.00 173.00,186.00 173.00,186.00 "
             + "173.00,186.00 174.00,181.00 174.00,181.00 "
             + "174.00,181.00 176.00,181.00 176.00,181.00 Z "
           + "M 219.00,182.00 "
           + "C 219.00,182.00 220.00,183.00 220.00,183.00 "
             + "220.00,183.00 220.00,185.00 220.00,185.00 "
             + "220.00,185.00 216.00,187.00 216.00,187.00 "
             + "216.00,187.00 217.00,182.00 217.00,182.00 "
             + "217.00,182.00 219.00,182.00 219.00,182.00 Z "
           + "M 211.00,184.00 "
           + "C 211.00,184.00 213.00,191.00 213.00,191.00 "
             + "213.00,191.00 207.00,187.00 207.00,187.00 "
            + "207.00,187.00 205.00,199.00 205.00,199.00 "
             + "200.17,195.13 202.87,186.46 211.00,184.00 Z "
           + "M 300.00,184.00 "
           + "C 299.64,188.68 299.23,189.58 296.00,193.00 "
             + "294.83,187.94 294.58,185.73 300.00,184.00 Z "
           + "M 344.00,188.00 "
           + "C 344.00,188.00 336.00,188.00 336.00,188.00 "
             + "339.41,184.17 340.59,184.17 344.00,188.00 Z "
           + "M 217.02,192.41 "
           + "C 219.89,188.08 228.05,187.09 232.00,190.00 "
             + "221.47,190.37 227.73,193.77 216.00,198.00 "
             + "216.07,196.13 215.94,194.05 217.02,192.41 Z "
           + "M 288.00,189.00 "
           + "C 286.68,193.93 285.68,194.94 281.00,197.00 "
             + "281.00,197.00 277.00,189.00 277.00,189.00 "
             + "277.00,189.00 288.00,189.00 288.00,189.00 Z "
           + "M 322.97,191.47 "
           + "C 324.41,193.49 324.89,201.92 315.00,198.38 "
             + "315.00,198.38 309.00,196.00 309.00,196.00 "
             + "311.54,187.87 321.28,189.10 322.97,191.47 Z "
           + "M 166.00,201.00 "
           + "C 160.91,198.19 160.19,195.56 160.00,190.00 "
             + "166.50,191.98 165.98,195.02 166.00,201.00 Z "
           + "M 357.00,190.00 "
           + "C 357.00,190.00 358.00,196.00 358.00,196.00 "
             + "358.00,196.00 352.00,197.00 352.00,197.00 "
             + "352.38,192.43 352.61,191.63 357.00,190.00 Z "
           + "M 277.00,199.00 "
           + "C 277.00,199.00 272.00,199.00 272.00,199.00 "
             + "272.00,199.00 272.00,191.00 272.00,191.00 "
             + "272.00,191.00 277.00,199.00 277.00,199.00 Z "
           + "M 254.00,193.00 "
           + "C 254.00,193.00 253.00,198.00 253.00,198.00 "
             + "253.00,198.00 249.00,193.00 249.00,193.00 "
             + "249.00,193.00 254.00,193.00 254.00,193.00 Z "
           + "M 268.00,202.00 "
           + "C 268.00,202.00 278.00,204.00 278.00,204.00 "
             + "270.03,205.91 268.52,203.71 261.00,202.00 "
             + "261.00,202.00 266.00,194.00 266.00,194.00 "
             + "266.00,194.00 268.00,202.00 268.00,202.00 Z "
           + "M 234.00,196.00 "
           + "C 232.87,198.71 232.87,198.45 230.00,199.00 "
             + "230.00,199.00 234.00,196.00 234.00,196.00 Z "
           + "M 248.00,199.00 "
           + "C 248.00,199.00 248.00,201.00 248.00,201.00 "
             + "243.96,201.54 243.69,200.90 243.00,197.00 "
             + "243.00,197.00 248.00,199.00 248.00,199.00 Z "
           + "M 197.00,211.00 "
           + "C 191.30,208.30 187.54,203.09 184.00,198.00 "
             + "192.09,198.68 199.52,201.24 197.00,211.00 Z "
           + "M 173.00,203.00 "
           + "C 173.00,203.00 172.00,199.00 172.00,199.00 "
             + "174.13,200.59 174.15,200.57 173.00,203.00 Z "
           + "M 213.00,199.00 "
           + "C 210.51,203.43 204.82,209.56 201.00,203.00 "
             + "201.00,203.00 213.00,199.00 213.00,199.00 Z "
           + "M 311.00,202.00 "
           + "C 311.00,202.00 308.00,203.00 308.00,203.00 "
             + "308.00,203.00 307.00,200.00 307.00,200.00 "
             + "307.00,200.00 311.00,202.00 311.00,202.00 Z "
           + "M 220.00,201.00 "
           + "C 219.37,209.85 211.27,216.47 207.00,209.00 "
             + "207.00,209.00 220.00,201.00 220.00,201.00 Z "
           + "M 341.00,201.00 "
           + "C 341.00,201.00 338.00,204.00 338.00,204.00 "
             + "338.00,204.00 336.00,202.00 336.00,202.00 "
             + "336.00,202.00 336.00,201.00 336.00,201.00 "
             + "336.00,201.00 341.00,201.00 341.00,201.00 Z "
           + "M 235.00,205.00 "
           + "C 235.88,207.26 237.82,210.52 236.84,212.87 "
             + "234.92,217.45 226.60,217.67 224.84,211.95 "
             + "223.97,209.12 225.91,205.59 227.00,203.00 "
             + "227.00,203.00 235.00,205.00 235.00,205.00 Z "
           + "M 319.00,205.00 "
           + "C 314.64,210.60 310.92,211.76 306.00,206.00 "
             + "306.00,206.00 319.00,205.00 319.00,205.00 Z "
           + "M 273.00,209.00 "
           + "C 273.00,209.00 272.00,215.00 272.00,215.00 "
             + "272.00,215.00 258.00,215.78 258.00,215.78 "
             + "258.00,215.78 246.00,211.00 246.00,211.00 "
             + "255.11,203.14 262.62,207.60 273.00,209.00 Z"
]

data.bacteria = [];

data.eukary = [];

module.exports = data;

},{}],2:[function(require,module,exports){
!function() {
  var d3 = {
    version: "3.5.3"
  };
  if (!Date.now) Date.now = function() {
    return +new Date();
  };
  var d3_arraySlice = [].slice, d3_array = function(list) {
    return d3_arraySlice.call(list);
  };
  var d3_document = document, d3_documentElement = d3_document.documentElement, d3_window = window;
  try {
    d3_array(d3_documentElement.childNodes)[0].nodeType;
  } catch (e) {
    d3_array = function(list) {
      var i = list.length, array = new Array(i);
      while (i--) array[i] = list[i];
      return array;
    };
  }
  try {
    d3_document.createElement("div").style.setProperty("opacity", 0, "");
  } catch (error) {
    var d3_element_prototype = d3_window.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = d3_window.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
    d3_element_prototype.setAttribute = function(name, value) {
      d3_element_setAttribute.call(this, name, value + "");
    };
    d3_element_prototype.setAttributeNS = function(space, local, value) {
      d3_element_setAttributeNS.call(this, space, local, value + "");
    };
    d3_style_prototype.setProperty = function(name, value, priority) {
      d3_style_setProperty.call(this, name, value + "", priority);
    };
  }
  d3.ascending = d3_ascending;
  function d3_ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }
  d3.descending = function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };
  d3.min = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
    }
    return a;
  };
  d3.max = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
    }
    return a;
  };
  d3.extent = function(array, f) {
    var i = -1, n = array.length, a, b, c;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    }
    return [ a, c ];
  };
  function d3_number(x) {
    return x === null ? NaN : +x;
  }
  function d3_numeric(x) {
    return !isNaN(x);
  }
  d3.sum = function(array, f) {
    var s = 0, n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
    } else {
      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
    }
    return s;
  };
  d3.mean = function(array, f) {
    var s = 0, n = array.length, a, i = -1, j = n;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
    }
    if (j) return s / j;
  };
  d3.quantile = function(values, p) {
    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };
  d3.median = function(array, f) {
    var numbers = [], n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
    }
    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
  };
  d3.variance = function(array, f) {
    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
    if (arguments.length === 1) {
      while (++i < n) {
        if (d3_numeric(a = d3_number(array[i]))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    } else {
      while (++i < n) {
        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    }
    if (j > 1) return s / (j - 1);
  };
  d3.deviation = function() {
    var v = d3.variance.apply(this, arguments);
    return v ? Math.sqrt(v) : v;
  };
  function d3_bisector(compare) {
    return {
      left: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
        }
        return lo;
      }
    };
  }
  var d3_bisect = d3_bisector(d3_ascending);
  d3.bisectLeft = d3_bisect.left;
  d3.bisect = d3.bisectRight = d3_bisect.right;
  d3.bisector = function(f) {
    return d3_bisector(f.length === 1 ? function(d, x) {
      return d3_ascending(f(d), x);
    } : f);
  };
  d3.shuffle = function(array, i0, i1) {
    if ((m = arguments.length) < 3) {
      i1 = array.length;
      if (m < 2) i0 = 0;
    }
    var m = i1 - i0, t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
    }
    return array;
  };
  d3.permute = function(array, indexes) {
    var i = indexes.length, permutes = new Array(i);
    while (i--) permutes[i] = array[indexes[i]];
    return permutes;
  };
  d3.pairs = function(array) {
    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
    return pairs;
  };
  d3.zip = function() {
    if (!(n = arguments.length)) return [];
    for (var i = -1, m = d3.min(arguments, d3_zipLength), zips = new Array(m); ++i < m; ) {
      for (var j = -1, n, zip = zips[i] = new Array(n); ++j < n; ) {
        zip[j] = arguments[j][i];
      }
    }
    return zips;
  };
  function d3_zipLength(d) {
    return d.length;
  }
  d3.transpose = function(matrix) {
    return d3.zip.apply(d3, matrix);
  };
  d3.keys = function(map) {
    var keys = [];
    for (var key in map) keys.push(key);
    return keys;
  };
  d3.values = function(map) {
    var values = [];
    for (var key in map) values.push(map[key]);
    return values;
  };
  d3.entries = function(map) {
    var entries = [];
    for (var key in map) entries.push({
      key: key,
      value: map[key]
    });
    return entries;
  };
  d3.merge = function(arrays) {
    var n = arrays.length, m, i = -1, j = 0, merged, array;
    while (++i < n) j += arrays[i].length;
    merged = new Array(j);
    while (--n >= 0) {
      array = arrays[n];
      m = array.length;
      while (--m >= 0) {
        merged[--j] = array[m];
      }
    }
    return merged;
  };
  var abs = Math.abs;
  d3.range = function(start, stop, step) {
    if (arguments.length < 3) {
      step = 1;
      if (arguments.length < 2) {
        stop = start;
        start = 0;
      }
    }
    if ((stop - start) / step === Infinity) throw new Error("infinite range");
    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
    start *= k, stop *= k, step *= k;
    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
    return range;
  };
  function d3_range_integerScale(x) {
    var k = 1;
    while (x * k % 1) k *= 10;
    return k;
  }
  function d3_class(ctor, properties) {
    for (var key in properties) {
      Object.defineProperty(ctor.prototype, key, {
        value: properties[key],
        enumerable: false
      });
    }
  }
  d3.map = function(object, f) {
    var map = new d3_Map();
    if (object instanceof d3_Map) {
      object.forEach(function(key, value) {
        map.set(key, value);
      });
    } else if (Array.isArray(object)) {
      var i = -1, n = object.length, o;
      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
    } else {
      for (var key in object) map.set(key, object[key]);
    }
    return map;
  };
  function d3_Map() {
    this._ = Object.create(null);
  }
  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
  d3_class(d3_Map, {
    has: d3_map_has,
    get: function(key) {
      return this._[d3_map_escape(key)];
    },
    set: function(key, value) {
      return this._[d3_map_escape(key)] = value;
    },
    remove: d3_map_remove,
    keys: d3_map_keys,
    values: function() {
      var values = [];
      for (var key in this._) values.push(this._[key]);
      return values;
    },
    entries: function() {
      var entries = [];
      for (var key in this._) entries.push({
        key: d3_map_unescape(key),
        value: this._[key]
      });
      return entries;
    },
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
    }
  });
  function d3_map_escape(key) {
    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
  }
  function d3_map_unescape(key) {
    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
  }
  function d3_map_has(key) {
    return d3_map_escape(key) in this._;
  }
  function d3_map_remove(key) {
    return (key = d3_map_escape(key)) in this._ && delete this._[key];
  }
  function d3_map_keys() {
    var keys = [];
    for (var key in this._) keys.push(d3_map_unescape(key));
    return keys;
  }
  function d3_map_size() {
    var size = 0;
    for (var key in this._) ++size;
    return size;
  }
  function d3_map_empty() {
    for (var key in this._) return false;
    return true;
  }
  d3.nest = function() {
    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
    function map(mapType, array, depth) {
      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [ object ]);
        }
      }
      if (mapType) {
        object = mapType();
        setter = function(keyValue, values) {
          object.set(keyValue, map(mapType, values, depth));
        };
      } else {
        object = {};
        setter = function(keyValue, values) {
          object[keyValue] = map(mapType, values, depth);
        };
      }
      valuesByKey.forEach(setter);
      return object;
    }
    function entries(map, depth) {
      if (depth >= keys.length) return map;
      var array = [], sortKey = sortKeys[depth++];
      map.forEach(function(key, keyMap) {
        array.push({
          key: key,
          values: entries(keyMap, depth)
        });
      });
      return sortKey ? array.sort(function(a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }
    nest.map = function(array, mapType) {
      return map(mapType, array, 0);
    };
    nest.entries = function(array) {
      return entries(map(d3.map, array, 0), 0);
    };
    nest.key = function(d) {
      keys.push(d);
      return nest;
    };
    nest.sortKeys = function(order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    };
    nest.sortValues = function(order) {
      sortValues = order;
      return nest;
    };
    nest.rollup = function(f) {
      rollup = f;
      return nest;
    };
    return nest;
  };
  d3.set = function(array) {
    var set = new d3_Set();
    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
    return set;
  };
  function d3_Set() {
    this._ = Object.create(null);
  }
  d3_class(d3_Set, {
    has: d3_map_has,
    add: function(key) {
      this._[d3_map_escape(key += "")] = true;
      return key;
    },
    remove: d3_map_remove,
    values: d3_map_keys,
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key));
    }
  });
  d3.behavior = {};
  d3.rebind = function(target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
  };
  function d3_rebind(target, source, method) {
    return function() {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }
  function d3_vendorSymbol(object, name) {
    if (name in object) return name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
      var prefixName = d3_vendorPrefixes[i] + name;
      if (prefixName in object) return prefixName;
    }
  }
  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
  function d3_noop() {}
  d3.dispatch = function() {
    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    return dispatch;
  };
  function d3_dispatch() {}
  d3_dispatch.prototype.on = function(type, listener) {
    var i = type.indexOf("."), name = "";
    if (i >= 0) {
      name = type.slice(i + 1);
      type = type.slice(0, i);
    }
    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
    if (arguments.length === 2) {
      if (listener == null) for (type in this) {
        if (this.hasOwnProperty(type)) this[type].on(name, null);
      }
      return this;
    }
  };
  function d3_dispatch_event(dispatch) {
    var listeners = [], listenerByName = new d3_Map();
    function event() {
      var z = listeners, i = -1, n = z.length, l;
      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
      return dispatch;
    }
    event.on = function(name, listener) {
      var l = listenerByName.get(name), i;
      if (arguments.length < 2) return l && l.on;
      if (l) {
        l.on = null;
        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
        listenerByName.remove(name);
      }
      if (listener) listeners.push(listenerByName.set(name, {
        on: listener
      }));
      return dispatch;
    };
    return event;
  }
  d3.event = null;
  function d3_eventPreventDefault() {
    d3.event.preventDefault();
  }
  function d3_eventSource() {
    var e = d3.event, s;
    while (s = e.sourceEvent) e = s;
    return e;
  }
  function d3_eventDispatch(target) {
    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    dispatch.of = function(thiz, argumentz) {
      return function(e1) {
        try {
          var e0 = e1.sourceEvent = d3.event;
          e1.target = target;
          d3.event = e1;
          dispatch[e1.type].apply(thiz, argumentz);
        } finally {
          d3.event = e0;
        }
      };
    };
    return dispatch;
  }
  d3.requote = function(s) {
    return s.replace(d3_requote_re, "\\$&");
  };
  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  var d3_subclass = {}.__proto__ ? function(object, prototype) {
    object.__proto__ = prototype;
  } : function(object, prototype) {
    for (var property in prototype) object[property] = prototype[property];
  };
  function d3_selection(groups) {
    d3_subclass(groups, d3_selectionPrototype);
    return groups;
  }
  var d3_select = function(s, n) {
    return n.querySelector(s);
  }, d3_selectAll = function(s, n) {
    return n.querySelectorAll(s);
  }, d3_selectMatcher = d3_documentElement.matches || d3_documentElement[d3_vendorSymbol(d3_documentElement, "matchesSelector")], d3_selectMatches = function(n, s) {
    return d3_selectMatcher.call(n, s);
  };
  if (typeof Sizzle === "function") {
    d3_select = function(s, n) {
      return Sizzle(s, n)[0] || null;
    };
    d3_selectAll = Sizzle;
    d3_selectMatches = Sizzle.matchesSelector;
  }
  d3.selection = function() {
    return d3_selectionRoot;
  };
  var d3_selectionPrototype = d3.selection.prototype = [];
  d3_selectionPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, group, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selector(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_select(selector, this);
    };
  }
  d3_selectionPrototype.selectAll = function(selector) {
    var subgroups = [], subgroup, node;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
          subgroup.parentNode = node;
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selectorAll(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_selectAll(selector, this);
    };
  }
  var d3_nsPrefix = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  d3.ns = {
    prefix: d3_nsPrefix,
    qualify: function(name) {
      var i = name.indexOf(":"), prefix = name;
      if (i >= 0) {
        prefix = name.slice(0, i);
        name = name.slice(i + 1);
      }
      return d3_nsPrefix.hasOwnProperty(prefix) ? {
        space: d3_nsPrefix[prefix],
        local: name
      } : name;
    }
  };
  d3_selectionPrototype.attr = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node();
        name = d3.ns.qualify(name);
        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }
      for (value in name) this.each(d3_selection_attr(value, name[value]));
      return this;
    }
    return this.each(d3_selection_attr(name, value));
  };
  function d3_selection_attr(name, value) {
    name = d3.ns.qualify(name);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrConstant() {
      this.setAttribute(name, value);
    }
    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }
    function attrFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
    }
    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
    }
    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }
  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, " ");
  }
  d3_selectionPrototype.classed = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
        if (value = node.classList) {
          while (++i < n) if (!value.contains(name[i])) return false;
        } else {
          value = node.getAttribute("class");
          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
        }
        return true;
      }
      for (value in name) this.each(d3_selection_classed(value, name[value]));
      return this;
    }
    return this.each(d3_selection_classed(name, value));
  };
  function d3_selection_classedRe(name) {
    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
  }
  function d3_selection_classes(name) {
    return (name + "").trim().split(/^|\s+/);
  }
  function d3_selection_classed(name, value) {
    name = d3_selection_classes(name).map(d3_selection_classedName);
    var n = name.length;
    function classedConstant() {
      var i = -1;
      while (++i < n) name[i](this, value);
    }
    function classedFunction() {
      var i = -1, x = value.apply(this, arguments);
      while (++i < n) name[i](this, x);
    }
    return typeof value === "function" ? classedFunction : classedConstant;
  }
  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function(node, value) {
      if (c = node.classList) return value ? c.add(name) : c.remove(name);
      var c = node.getAttribute("class") || "";
      if (value) {
        re.lastIndex = 0;
        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
      } else {
        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
      }
    };
  }
  d3_selectionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
        return this;
      }
      if (n < 2) return d3_window.getComputedStyle(this.node(), null).getPropertyValue(name);
      priority = "";
    }
    return this.each(d3_selection_style(name, value, priority));
  };
  function d3_selection_style(name, value, priority) {
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }
    function styleFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
    }
    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
  }
  d3_selectionPrototype.property = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") return this.node()[name];
      for (value in name) this.each(d3_selection_property(value, name[value]));
      return this;
    }
    return this.each(d3_selection_property(name, value));
  };
  function d3_selection_property(name, value) {
    function propertyNull() {
      delete this[name];
    }
    function propertyConstant() {
      this[name] = value;
    }
    function propertyFunction() {
      var x = value.apply(this, arguments);
      if (x == null) delete this[name]; else this[name] = x;
    }
    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
  }
  d3_selectionPrototype.text = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    } : value == null ? function() {
      this.textContent = "";
    } : function() {
      this.textContent = value;
    }) : this.node().textContent;
  };
  d3_selectionPrototype.html = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    } : value == null ? function() {
      this.innerHTML = "";
    } : function() {
      this.innerHTML = value;
    }) : this.node().innerHTML;
  };
  d3_selectionPrototype.append = function(name) {
    name = d3_selection_creator(name);
    return this.select(function() {
      return this.appendChild(name.apply(this, arguments));
    });
  };
  function d3_selection_creator(name) {
    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? function() {
      return this.ownerDocument.createElementNS(name.space, name.local);
    } : function() {
      return this.ownerDocument.createElementNS(this.namespaceURI, name);
    };
  }
  d3_selectionPrototype.insert = function(name, before) {
    name = d3_selection_creator(name);
    before = d3_selection_selector(before);
    return this.select(function() {
      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
    });
  };
  d3_selectionPrototype.remove = function() {
    return this.each(d3_selectionRemove);
  };
  function d3_selectionRemove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  d3_selectionPrototype.data = function(value, key) {
    var i = -1, n = this.length, group, node;
    if (!arguments.length) {
      value = new Array(n = (group = this[0]).length);
      while (++i < n) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }
      return value;
    }
    function bind(group, groupData) {
      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
      if (key) {
        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
        for (i = -1; ++i < n; ) {
          if (nodeByKeyValue.has(keyValue = key.call(node = group[i], node.__data__, i))) {
            exitNodes[i] = node;
          } else {
            nodeByKeyValue.set(keyValue, node);
          }
          keyValues[i] = keyValue;
        }
        for (i = -1; ++i < m; ) {
          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          } else if (node !== true) {
            updateNodes[i] = node;
            node.__data__ = nodeData;
          }
          nodeByKeyValue.set(keyValue, true);
        }
        for (i = -1; ++i < n; ) {
          if (nodeByKeyValue.get(keyValues[i]) !== true) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        for (i = -1; ++i < n0; ) {
          node = group[i];
          nodeData = groupData[i];
          if (node) {
            node.__data__ = nodeData;
            updateNodes[i] = node;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
        }
        for (;i < m; ++i) {
          enterNodes[i] = d3_selection_dataNode(groupData[i]);
        }
        for (;i < n; ++i) {
          exitNodes[i] = group[i];
        }
      }
      enterNodes.update = updateNodes;
      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(enterNodes);
      update.push(updateNodes);
      exit.push(exitNodes);
    }
    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
    if (typeof value === "function") {
      while (++i < n) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      while (++i < n) {
        bind(group = this[i], value);
      }
    }
    update.enter = function() {
      return enter;
    };
    update.exit = function() {
      return exit;
    };
    return update;
  };
  function d3_selection_dataNode(data) {
    return {
      __data__: data
    };
  }
  d3_selectionPrototype.datum = function(value) {
    return arguments.length ? this.property("__data__", value) : this.property("__data__");
  };
  d3_selectionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_filter(selector) {
    return function() {
      return d3_selectMatches(this, selector);
    };
  }
  d3_selectionPrototype.order = function() {
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  };
  d3_selectionPrototype.sort = function(comparator) {
    comparator = d3_selection_sortComparator.apply(this, arguments);
    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
    return this.order();
  };
  function d3_selection_sortComparator(comparator) {
    if (!arguments.length) comparator = d3_ascending;
    return function(a, b) {
      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
    };
  }
  d3_selectionPrototype.each = function(callback) {
    return d3_selection_each(this, function(node, i, j) {
      callback.call(node, node.__data__, i, j);
    });
  };
  function d3_selection_each(groups, callback) {
    for (var j = 0, m = groups.length; j < m; j++) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
        if (node = group[i]) callback(node, i, j);
      }
    }
    return groups;
  }
  d3_selectionPrototype.call = function(callback) {
    var args = d3_array(arguments);
    callback.apply(args[0] = this, args);
    return this;
  };
  d3_selectionPrototype.empty = function() {
    return !this.node();
  };
  d3_selectionPrototype.node = function() {
    for (var j = 0, m = this.length; j < m; j++) {
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  };
  d3_selectionPrototype.size = function() {
    var n = 0;
    d3_selection_each(this, function() {
      ++n;
    });
    return n;
  };
  function d3_selection_enter(selection) {
    d3_subclass(selection, d3_selection_enterPrototype);
    return selection;
  }
  var d3_selection_enterPrototype = [];
  d3.selection.enter = d3_selection_enter;
  d3.selection.enter.prototype = d3_selection_enterPrototype;
  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
  d3_selection_enterPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, upgroup, group, node;
    for (var j = -1, m = this.length; ++j < m; ) {
      upgroup = (group = this[j]).update;
      subgroups.push(subgroup = []);
      subgroup.parentNode = group.parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
          subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  d3_selection_enterPrototype.insert = function(name, before) {
    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
    return d3_selectionPrototype.insert.call(this, name, before);
  };
  function d3_selection_enterInsertBefore(enter) {
    var i0, j0;
    return function(d, i, j) {
      var group = enter[j].update, n = group.length, node;
      if (j != j0) j0 = j, i0 = 0;
      if (i >= i0) i0 = i + 1;
      while (!(node = group[i0]) && ++i0 < n) ;
      return node;
    };
  }
  d3.select = function(node) {
    var group = [ typeof node === "string" ? d3_select(node, d3_document) : node ];
    group.parentNode = d3_documentElement;
    return d3_selection([ group ]);
  };
  d3.selectAll = function(nodes) {
    var group = d3_array(typeof nodes === "string" ? d3_selectAll(nodes, d3_document) : nodes);
    group.parentNode = d3_documentElement;
    return d3_selection([ group ]);
  };
  var d3_selectionRoot = d3.select(d3_documentElement);
  d3_selectionPrototype.on = function(type, listener, capture) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof type !== "string") {
        if (n < 2) listener = false;
        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
        return this;
      }
      if (n < 2) return (n = this.node()["__on" + type]) && n._;
      capture = false;
    }
    return this.each(d3_selection_on(type, listener, capture));
  };
  function d3_selection_on(type, listener, capture) {
    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
    if (i > 0) type = type.slice(0, i);
    var filter = d3_selection_onFilters.get(type);
    if (filter) type = filter, wrap = d3_selection_onFilter;
    function onRemove() {
      var l = this[name];
      if (l) {
        this.removeEventListener(type, l, l.$);
        delete this[name];
      }
    }
    function onAdd() {
      var l = wrap(listener, d3_array(arguments));
      onRemove.call(this);
      this.addEventListener(type, this[name] = l, l.$ = capture);
      l._ = listener;
    }
    function removeAll() {
      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
      for (var name in this) {
        if (match = name.match(re)) {
          var l = this[name];
          this.removeEventListener(match[1], l, l.$);
          delete this[name];
        }
      }
    }
    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
  }
  var d3_selection_onFilters = d3.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });
  d3_selection_onFilters.forEach(function(k) {
    if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
  });
  function d3_selection_onListener(listener, argumentz) {
    return function(e) {
      var o = d3.event;
      d3.event = e;
      argumentz[0] = this.__data__;
      try {
        listener.apply(this, argumentz);
      } finally {
        d3.event = o;
      }
    };
  }
  function d3_selection_onFilter(listener, argumentz) {
    var l = d3_selection_onListener(listener, argumentz);
    return function(e) {
      var target = this, related = e.relatedTarget;
      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
        l.call(target, e);
      }
    };
  }
  var d3_event_dragSelect = "onselectstart" in d3_document ? null : d3_vendorSymbol(d3_documentElement.style, "userSelect"), d3_event_dragId = 0;
  function d3_event_dragSuppress() {
    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
    if (d3_event_dragSelect) {
      var style = d3_documentElement.style, select = style[d3_event_dragSelect];
      style[d3_event_dragSelect] = "none";
    }
    return function(suppressClick) {
      w.on(name, null);
      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
      if (suppressClick) {
        var off = function() {
          w.on(click, null);
        };
        w.on(click, function() {
          d3_eventPreventDefault();
          off();
        }, true);
        setTimeout(off, 0);
      }
    };
  }
  d3.mouse = function(container) {
    return d3_mousePoint(container, d3_eventSource());
  };
  var d3_mouse_bug44083 = /WebKit/.test(d3_window.navigator.userAgent) ? -1 : 0;
  function d3_mousePoint(container, e) {
    if (e.changedTouches) e = e.changedTouches[0];
    var svg = container.ownerSVGElement || container;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      if (d3_mouse_bug44083 < 0 && (d3_window.scrollX || d3_window.scrollY)) {
        svg = d3.select("body").append("svg").style({
          position: "absolute",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          border: "none"
        }, "important");
        var ctm = svg[0][0].getScreenCTM();
        d3_mouse_bug44083 = !(ctm.f || ctm.e);
        svg.remove();
      }
      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
      point.y = e.clientY;
      point = point.matrixTransform(container.getScreenCTM().inverse());
      return [ point.x, point.y ];
    }
    var rect = container.getBoundingClientRect();
    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
  }
  d3.touch = function(container, touches, identifier) {
    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
      if ((touch = touches[i]).identifier === identifier) {
        return d3_mousePoint(container, touch);
      }
    }
  };
  d3.behavior.drag = function() {
    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_behavior_dragMouseSubject, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_behavior_dragTouchSubject, "touchmove", "touchend");
    function drag() {
      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
    }
    function dragstart(id, position, subject, move, end) {
      return function() {
        var that = this, target = d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject()).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(), position0 = position(parent, dragId);
        if (origin) {
          dragOffset = origin.apply(that, arguments);
          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
        } else {
          dragOffset = [ 0, 0 ];
        }
        dispatch({
          type: "dragstart"
        });
        function moved() {
          var position1 = position(parent, dragId), dx, dy;
          if (!position1) return;
          dx = position1[0] - position0[0];
          dy = position1[1] - position0[1];
          dragged |= dx | dy;
          position0 = position1;
          dispatch({
            type: "drag",
            x: position1[0] + dragOffset[0],
            y: position1[1] + dragOffset[1],
            dx: dx,
            dy: dy
          });
        }
        function ended() {
          if (!position(parent, dragId)) return;
          dragSubject.on(move + dragName, null).on(end + dragName, null);
          dragRestore(dragged && d3.event.target === target);
          dispatch({
            type: "dragend"
          });
        }
      };
    }
    drag.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return drag;
    };
    return d3.rebind(drag, event, "on");
  };
  function d3_behavior_dragTouchId() {
    return d3.event.changedTouches[0].identifier;
  }
  function d3_behavior_dragTouchSubject() {
    return d3.event.target;
  }
  function d3_behavior_dragMouseSubject() {
    return d3_window;
  }
  d3.touches = function(container, touches) {
    if (arguments.length < 2) touches = d3_eventSource().touches;
    return touches ? d3_array(touches).map(function(touch) {
      var point = d3_mousePoint(container, touch);
      point.identifier = touch.identifier;
      return point;
    }) : [];
  };
  var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
  function d3_sgn(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }
  function d3_cross2d(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  }
  function d3_acos(x) {
    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
  }
  function d3_asin(x) {
    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
  }
  function d3_sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
  }
  function d3_cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
  }
  function d3_tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
  }
  function d3_haversin(x) {
    return (x = Math.sin(x / 2)) * x;
  }
  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
  d3.interpolateZoom = function(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2];
    var dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1), dr = r1 - r0, S = (dr || Math.log(w1 / w0)) / ρ;
    function interpolate(t) {
      var s = t * S;
      if (dr) {
        var coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
      }
      return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * s) ];
    }
    interpolate.duration = S * 1e3;
    return interpolate;
  };
  d3.behavior.zoom = function() {
    var view = {
      x: 0,
      y: 0,
      k: 1
    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
    function zoom(g) {
      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
    }
    zoom.event = function(g) {
      g.each(function() {
        var dispatch = event.of(this, arguments), view1 = view;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.zoom", function() {
            view = this.__chart__ || {
              x: 0,
              y: 0,
              k: 1
            };
            zoomstarted(dispatch);
          }).tween("zoom:zoom", function() {
            var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
            return function(t) {
              var l = i(t), k = dx / l[2];
              this.__chart__ = view = {
                x: cx - l[0] * k,
                y: cy - l[1] * k,
                k: k
              };
              zoomed(dispatch);
            };
          }).each("interrupt.zoom", function() {
            zoomended(dispatch);
          }).each("end.zoom", function() {
            zoomended(dispatch);
          });
        } else {
          this.__chart__ = view;
          zoomstarted(dispatch);
          zoomed(dispatch);
          zoomended(dispatch);
        }
      });
    };
    zoom.translate = function(_) {
      if (!arguments.length) return [ view.x, view.y ];
      view = {
        x: +_[0],
        y: +_[1],
        k: view.k
      };
      rescale();
      return zoom;
    };
    zoom.scale = function(_) {
      if (!arguments.length) return view.k;
      view = {
        x: view.x,
        y: view.y,
        k: +_
      };
      rescale();
      return zoom;
    };
    zoom.scaleExtent = function(_) {
      if (!arguments.length) return scaleExtent;
      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.center = function(_) {
      if (!arguments.length) return center;
      center = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.size = function(_) {
      if (!arguments.length) return size;
      size = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.duration = function(_) {
      if (!arguments.length) return duration;
      duration = +_;
      return zoom;
    };
    zoom.x = function(z) {
      if (!arguments.length) return x1;
      x1 = z;
      x0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    zoom.y = function(z) {
      if (!arguments.length) return y1;
      y1 = z;
      y0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    function location(p) {
      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
    }
    function point(l) {
      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
    }
    function scaleTo(s) {
      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
    }
    function translateTo(p, l) {
      l = point(l);
      view.x += p[0] - l[0];
      view.y += p[1] - l[1];
    }
    function zoomTo(that, p, l, k) {
      that.__chart__ = {
        x: view.x,
        y: view.y,
        k: view.k
      };
      scaleTo(Math.pow(2, k));
      translateTo(center0 = p, l);
      that = d3.select(that);
      if (duration > 0) that = that.transition().duration(duration);
      that.call(zoom.event);
    }
    function rescale() {
      if (x1) x1.domain(x0.range().map(function(x) {
        return (x - view.x) / view.k;
      }).map(x0.invert));
      if (y1) y1.domain(y0.range().map(function(y) {
        return (y - view.y) / view.k;
      }).map(y0.invert));
    }
    function zoomstarted(dispatch) {
      if (!zooming++) dispatch({
        type: "zoomstart"
      });
    }
    function zoomed(dispatch) {
      rescale();
      dispatch({
        type: "zoom",
        scale: view.k,
        translate: [ view.x, view.y ]
      });
    }
    function zoomended(dispatch) {
      if (!--zooming) dispatch({
        type: "zoomend"
      });
      center0 = null;
    }
    function mousedowned() {
      var that = this, target = d3.event.target, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress();
      d3_selection_interrupt.call(that);
      zoomstarted(dispatch);
      function moved() {
        dragged = 1;
        translateTo(d3.mouse(that), location0);
        zoomed(dispatch);
      }
      function ended() {
        subject.on(mousemove, null).on(mouseup, null);
        dragRestore(dragged && d3.event.target === target);
        zoomended(dispatch);
      }
    }
    function touchstarted() {
      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that), dragRestore = d3_event_dragSuppress();
      started();
      zoomstarted(dispatch);
      subject.on(mousedown, null).on(touchstart, started);
      function relocate() {
        var touches = d3.touches(that);
        scale0 = view.k;
        touches.forEach(function(t) {
          if (t.identifier in locations0) locations0[t.identifier] = location(t);
        });
        return touches;
      }
      function started() {
        var target = d3.event.target;
        d3.select(target).on(touchmove, moved).on(touchend, ended);
        targets.push(target);
        var changed = d3.event.changedTouches;
        for (var i = 0, n = changed.length; i < n; ++i) {
          locations0[changed[i].identifier] = null;
        }
        var touches = relocate(), now = Date.now();
        if (touches.length === 1) {
          if (now - touchtime < 500) {
            var p = touches[0];
            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
            d3_eventPreventDefault();
          }
          touchtime = now;
        } else if (touches.length > 1) {
          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
          distance0 = dx * dx + dy * dy;
        }
      }
      function moved() {
        var touches = d3.touches(that), p0, l0, p1, l1;
        d3_selection_interrupt.call(that);
        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
          p1 = touches[i];
          if (l1 = locations0[p1.identifier]) {
            if (l0) break;
            p0 = p1, l0 = l1;
          }
        }
        if (l1) {
          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
          scaleTo(scale1 * scale0);
        }
        touchtime = null;
        translateTo(p0, l0);
        zoomed(dispatch);
      }
      function ended() {
        if (d3.event.touches.length) {
          var changed = d3.event.changedTouches;
          for (var i = 0, n = changed.length; i < n; ++i) {
            delete locations0[changed[i].identifier];
          }
          for (var identifier in locations0) {
            return void relocate();
          }
        }
        d3.selectAll(targets).on(zoomName, null);
        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
        dragRestore();
        zoomended(dispatch);
      }
    }
    function mousewheeled() {
      var dispatch = event.of(this, arguments);
      if (mousewheelTimer) clearTimeout(mousewheelTimer); else translate0 = location(center0 = center || d3.mouse(this)), 
      d3_selection_interrupt.call(this), zoomstarted(dispatch);
      mousewheelTimer = setTimeout(function() {
        mousewheelTimer = null;
        zoomended(dispatch);
      }, 50);
      d3_eventPreventDefault();
      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
      translateTo(center0, translate0);
      zoomed(dispatch);
    }
    function dblclicked() {
      var p = d3.mouse(this), k = Math.log(view.k) / Math.LN2;
      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
    }
    return d3.rebind(zoom, event, "on");
  };
  var d3_behavior_zoomInfinity = [ 0, Infinity ];
  var d3_behavior_zoomDelta, d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
    return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
  }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
    return d3.event.wheelDelta;
  }, "mousewheel") : (d3_behavior_zoomDelta = function() {
    return -d3.event.detail;
  }, "MozMousePixelScroll");
  d3.color = d3_color;
  function d3_color() {}
  d3_color.prototype.toString = function() {
    return this.rgb() + "";
  };
  d3.hsl = d3_hsl;
  function d3_hsl(h, s, l) {
    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
  }
  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
  d3_hslPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, this.l / k);
  };
  d3_hslPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, k * this.l);
  };
  d3_hslPrototype.rgb = function() {
    return d3_hsl_rgb(this.h, this.s, this.l);
  };
  function d3_hsl_rgb(h, s, l) {
    var m1, m2;
    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
    l = l < 0 ? 0 : l > 1 ? 1 : l;
    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
    m1 = 2 * l - m2;
    function v(h) {
      if (h > 360) h -= 360; else if (h < 0) h += 360;
      if (h < 60) return m1 + (m2 - m1) * h / 60;
      if (h < 180) return m2;
      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
      return m1;
    }
    function vv(h) {
      return Math.round(v(h) * 255);
    }
    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
  }
  d3.hcl = d3_hcl;
  function d3_hcl(h, c, l) {
    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
  }
  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
  d3_hclPrototype.brighter = function(k) {
    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.darker = function(k) {
    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.rgb = function() {
    return d3_hcl_lab(this.h, this.c, this.l).rgb();
  };
  function d3_hcl_lab(h, c, l) {
    if (isNaN(h)) h = 0;
    if (isNaN(c)) c = 0;
    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
  }
  d3.lab = d3_lab;
  function d3_lab(l, a, b) {
    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
  }
  var d3_lab_K = 18;
  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
  var d3_labPrototype = d3_lab.prototype = new d3_color();
  d3_labPrototype.brighter = function(k) {
    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.darker = function(k) {
    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.rgb = function() {
    return d3_lab_rgb(this.l, this.a, this.b);
  };
  function d3_lab_rgb(l, a, b) {
    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
    x = d3_lab_xyz(x) * d3_lab_X;
    y = d3_lab_xyz(y) * d3_lab_Y;
    z = d3_lab_xyz(z) * d3_lab_Z;
    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
  }
  function d3_lab_hcl(l, a, b) {
    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
  }
  function d3_lab_xyz(x) {
    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
  }
  function d3_xyz_lab(x) {
    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
  }
  function d3_xyz_rgb(r) {
    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
  }
  d3.rgb = d3_rgb;
  function d3_rgb(r, g, b) {
    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
  }
  function d3_rgbNumber(value) {
    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
  }
  function d3_rgbString(value) {
    return d3_rgbNumber(value) + "";
  }
  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
  d3_rgbPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    var r = this.r, g = this.g, b = this.b, i = 30;
    if (!r && !g && !b) return new d3_rgb(i, i, i);
    if (r && r < i) r = i;
    if (g && g < i) g = i;
    if (b && b < i) b = i;
    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
  };
  d3_rgbPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_rgb(k * this.r, k * this.g, k * this.b);
  };
  d3_rgbPrototype.hsl = function() {
    return d3_rgb_hsl(this.r, this.g, this.b);
  };
  d3_rgbPrototype.toString = function() {
    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
  };
  function d3_rgb_hex(v) {
    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
  }
  function d3_rgb_parse(format, rgb, hsl) {
    var r = 0, g = 0, b = 0, m1, m2, color;
    m1 = /([a-z]+)\((.*)\)/i.exec(format);
    if (m1) {
      m2 = m1[2].split(",");
      switch (m1[1]) {
       case "hsl":
        {
          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
        }

       case "rgb":
        {
          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
        }
      }
    }
    if (color = d3_rgb_names.get(format)) return rgb(color.r, color.g, color.b);
    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
      if (format.length === 4) {
        r = (color & 3840) >> 4;
        r = r >> 4 | r;
        g = color & 240;
        g = g >> 4 | g;
        b = color & 15;
        b = b << 4 | b;
      } else if (format.length === 7) {
        r = (color & 16711680) >> 16;
        g = (color & 65280) >> 8;
        b = color & 255;
      }
    }
    return rgb(r, g, b);
  }
  function d3_rgb_hsl(r, g, b) {
    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
    if (d) {
      s = l < .5 ? d / (max + min) : d / (2 - max - min);
      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
      h *= 60;
    } else {
      h = NaN;
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new d3_hsl(h, s, l);
  }
  function d3_rgb_lab(r, g, b) {
    r = d3_rgb_xyz(r);
    g = d3_rgb_xyz(g);
    b = d3_rgb_xyz(b);
    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
  }
  function d3_rgb_xyz(r) {
    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
  }
  function d3_rgb_parseNumber(c) {
    var f = parseFloat(c);
    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
  }
  var d3_rgb_names = d3.map({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  });
  d3_rgb_names.forEach(function(key, value) {
    d3_rgb_names.set(key, d3_rgbNumber(value));
  });
  function d3_functor(v) {
    return typeof v === "function" ? v : function() {
      return v;
    };
  }
  d3.functor = d3_functor;
  function d3_identity(d) {
    return d;
  }
  d3.xhr = d3_xhrType(d3_identity);
  function d3_xhrType(response) {
    return function(url, mimeType, callback) {
      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
      mimeType = null;
      return d3_xhr(url, mimeType, response, callback);
    };
  }
  function d3_xhr(url, mimeType, response, callback) {
    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
    if (d3_window.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
      request.readyState > 3 && respond();
    };
    function respond() {
      var status = request.status, result;
      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
        try {
          result = response.call(xhr, request);
        } catch (e) {
          dispatch.error.call(xhr, e);
          return;
        }
        dispatch.load.call(xhr, result);
      } else {
        dispatch.error.call(xhr, request);
      }
    }
    request.onprogress = function(event) {
      var o = d3.event;
      d3.event = event;
      try {
        dispatch.progress.call(xhr, request);
      } finally {
        d3.event = o;
      }
    };
    xhr.header = function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers[name];
      if (value == null) delete headers[name]; else headers[name] = value + "";
      return xhr;
    };
    xhr.mimeType = function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return xhr;
    };
    xhr.responseType = function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return xhr;
    };
    xhr.response = function(value) {
      response = value;
      return xhr;
    };
    [ "get", "post" ].forEach(function(method) {
      xhr[method] = function() {
        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
      };
    });
    xhr.send = function(method, data, callback) {
      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
      request.open(method, url, true);
      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
      if (responseType != null) request.responseType = responseType;
      if (callback != null) xhr.on("error", callback).on("load", function(request) {
        callback(null, request);
      });
      dispatch.beforesend.call(xhr, request);
      request.send(data == null ? null : data);
      return xhr;
    };
    xhr.abort = function() {
      request.abort();
      return xhr;
    };
    d3.rebind(xhr, dispatch, "on");
    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
  }
  function d3_xhr_fixCallback(callback) {
    return callback.length === 1 ? function(error, request) {
      callback(error == null ? request : null);
    } : callback;
  }
  function d3_xhrHasResponse(request) {
    var type = request.responseType;
    return type && type !== "text" ? request.response : request.responseText;
  }
  d3.dsv = function(delimiter, mimeType) {
    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
    function dsv(url, row, callback) {
      if (arguments.length < 3) callback = row, row = null;
      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
      xhr.row = function(_) {
        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
      };
      return xhr;
    }
    function response(request) {
      return dsv.parse(request.responseText);
    }
    function typedResponse(f) {
      return function(request) {
        return dsv.parse(request.responseText, f);
      };
    }
    dsv.parse = function(text, f) {
      var o;
      return dsv.parseRows(text, function(row, i) {
        if (o) return o(row, i - 1);
        var a = new Function("d", "return {" + row.map(function(name, i) {
          return JSON.stringify(name) + ": d[" + i + "]";
        }).join(",") + "}");
        o = f ? function(row, i) {
          return f(a(row), i);
        } : a;
      });
    };
    dsv.parseRows = function(text, f) {
      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
      function token() {
        if (I >= N) return EOF;
        if (eol) return eol = false, EOL;
        var j = I;
        if (text.charCodeAt(j) === 34) {
          var i = j;
          while (i++ < N) {
            if (text.charCodeAt(i) === 34) {
              if (text.charCodeAt(i + 1) !== 34) break;
              ++i;
            }
          }
          I = i + 2;
          var c = text.charCodeAt(i + 1);
          if (c === 13) {
            eol = true;
            if (text.charCodeAt(i + 2) === 10) ++I;
          } else if (c === 10) {
            eol = true;
          }
          return text.slice(j + 1, i).replace(/""/g, '"');
        }
        while (I < N) {
          var c = text.charCodeAt(I++), k = 1;
          if (c === 10) eol = true; else if (c === 13) {
            eol = true;
            if (text.charCodeAt(I) === 10) ++I, ++k;
          } else if (c !== delimiterCode) continue;
          return text.slice(j, I - k);
        }
        return text.slice(j);
      }
      while ((t = token()) !== EOF) {
        var a = [];
        while (t !== EOL && t !== EOF) {
          a.push(t);
          t = token();
        }
        if (f && (a = f(a, n++)) == null) continue;
        rows.push(a);
      }
      return rows;
    };
    dsv.format = function(rows) {
      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
      var fieldSet = new d3_Set(), fields = [];
      rows.forEach(function(row) {
        for (var field in row) {
          if (!fieldSet.has(field)) {
            fields.push(fieldSet.add(field));
          }
        }
      });
      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
        return fields.map(function(field) {
          return formatValue(row[field]);
        }).join(delimiter);
      })).join("\n");
    };
    dsv.formatRows = function(rows) {
      return rows.map(formatRow).join("\n");
    };
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(text) {
      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
    }
    return dsv;
  };
  d3.csv = d3.dsv(",", "text/csv");
  d3.tsv = d3.dsv("	", "text/tab-separated-values");
  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_active, d3_timer_frame = d3_window[d3_vendorSymbol(d3_window, "requestAnimationFrame")] || function(callback) {
    setTimeout(callback, 17);
  };
  d3.timer = function(callback, delay, then) {
    var n = arguments.length;
    if (n < 2) delay = 0;
    if (n < 3) then = Date.now();
    var time = then + delay, timer = {
      c: callback,
      t: time,
      f: false,
      n: null
    };
    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
    d3_timer_queueTail = timer;
    if (!d3_timer_interval) {
      d3_timer_timeout = clearTimeout(d3_timer_timeout);
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  };
  function d3_timer_step() {
    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
    if (delay > 24) {
      if (isFinite(delay)) {
        clearTimeout(d3_timer_timeout);
        d3_timer_timeout = setTimeout(d3_timer_step, delay);
      }
      d3_timer_interval = 0;
    } else {
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  }
  d3.timer.flush = function() {
    d3_timer_mark();
    d3_timer_sweep();
  };
  function d3_timer_mark() {
    var now = Date.now();
    d3_timer_active = d3_timer_queueHead;
    while (d3_timer_active) {
      if (now >= d3_timer_active.t) d3_timer_active.f = d3_timer_active.c(now - d3_timer_active.t);
      d3_timer_active = d3_timer_active.n;
    }
    return now;
  }
  function d3_timer_sweep() {
    var t0, t1 = d3_timer_queueHead, time = Infinity;
    while (t1) {
      if (t1.f) {
        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
      } else {
        if (t1.t < time) time = t1.t;
        t1 = (t0 = t1).n;
      }
    }
    d3_timer_queueTail = t0;
    return time;
  }
  function d3_format_precision(x, p) {
    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
  }
  d3.round = function(x, n) {
    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
  };
  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
  d3.formatPrefix = function(value, precision) {
    var i = 0;
    if (value) {
      if (value < 0) value *= -1;
      if (precision) value = d3.round(value, d3_format_precision(value, precision));
      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
    }
    return d3_formatPrefixes[8 + i / 3];
  };
  function d3_formatPrefix(d, i) {
    var k = Math.pow(10, abs(8 - i) * 3);
    return {
      scale: i > 8 ? function(d) {
        return d / k;
      } : function(d) {
        return d * k;
      },
      symbol: d
    };
  }
  function d3_locale_numberFormat(locale) {
    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
      var i = value.length, t = [], j = 0, g = locale_grouping[0], length = 0;
      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = locale_grouping[j = (j + 1) % locale_grouping.length];
      }
      return t.reverse().join(locale_thousands);
    } : d3_identity;
    return function(specifier) {
      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
      if (precision) precision = +precision.substring(1);
      if (zfill || fill === "0" && align === "=") {
        zfill = fill = "0";
        align = "=";
      }
      switch (type) {
       case "n":
        comma = true;
        type = "g";
        break;

       case "%":
        scale = 100;
        suffix = "%";
        type = "f";
        break;

       case "p":
        scale = 100;
        suffix = "%";
        type = "r";
        break;

       case "b":
       case "o":
       case "x":
       case "X":
        if (symbol === "#") prefix = "0" + type.toLowerCase();

       case "c":
        exponent = false;

       case "d":
        integer = true;
        precision = 0;
        break;

       case "s":
        scale = -1;
        type = "r";
        break;
      }
      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
      if (type == "r" && !precision) type = "g";
      if (precision != null) {
        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
      }
      type = d3_format_types.get(type) || d3_format_typeDefault;
      var zcomma = zfill && comma;
      return function(value) {
        var fullSuffix = suffix;
        if (integer && value % 1) return "";
        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
        if (scale < 0) {
          var unit = d3.formatPrefix(value, precision);
          value = unit.scale(value);
          fullSuffix = unit.symbol + suffix;
        } else {
          value *= scale;
        }
        value = type(value, precision);
        var i = value.lastIndexOf("."), before, after;
        if (i < 0) {
          var j = exponent ? value.lastIndexOf("e") : -1;
          if (j < 0) before = value, after = ""; else before = value.substring(0, j), after = value.substring(j);
        } else {
          before = value.substring(0, i);
          after = locale_decimal + value.substring(i + 1);
        }
        if (!zfill && comma) before = formatGroup(before, Infinity);
        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
        negative += prefix;
        value = before + after;
        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
      };
    };
  }
  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
  var d3_format_types = d3.map({
    b: function(x) {
      return x.toString(2);
    },
    c: function(x) {
      return String.fromCharCode(x);
    },
    o: function(x) {
      return x.toString(8);
    },
    x: function(x) {
      return x.toString(16);
    },
    X: function(x) {
      return x.toString(16).toUpperCase();
    },
    g: function(x, p) {
      return x.toPrecision(p);
    },
    e: function(x, p) {
      return x.toExponential(p);
    },
    f: function(x, p) {
      return x.toFixed(p);
    },
    r: function(x, p) {
      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
    }
  });
  function d3_format_typeDefault(x) {
    return x + "";
  }
  var d3_time = d3.time = {}, d3_date = Date;
  function d3_date_utc() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }
  d3_date_utc.prototype = {
    getDate: function() {
      return this._.getUTCDate();
    },
    getDay: function() {
      return this._.getUTCDay();
    },
    getFullYear: function() {
      return this._.getUTCFullYear();
    },
    getHours: function() {
      return this._.getUTCHours();
    },
    getMilliseconds: function() {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function() {
      return this._.getUTCMinutes();
    },
    getMonth: function() {
      return this._.getUTCMonth();
    },
    getSeconds: function() {
      return this._.getUTCSeconds();
    },
    getTime: function() {
      return this._.getTime();
    },
    getTimezoneOffset: function() {
      return 0;
    },
    valueOf: function() {
      return this._.valueOf();
    },
    setDate: function() {
      d3_time_prototype.setUTCDate.apply(this._, arguments);
    },
    setDay: function() {
      d3_time_prototype.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function() {
      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function() {
      d3_time_prototype.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function() {
      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function() {
      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function() {
      d3_time_prototype.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function() {
      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function() {
      d3_time_prototype.setTime.apply(this._, arguments);
    }
  };
  var d3_time_prototype = Date.prototype;
  function d3_time_interval(local, step, number) {
    function round(date) {
      var d0 = local(date), d1 = offset(d0, 1);
      return date - d0 < d1 - date ? d0 : d1;
    }
    function ceil(date) {
      step(date = local(new d3_date(date - 1)), 1);
      return date;
    }
    function offset(date, k) {
      step(date = new d3_date(+date), k);
      return date;
    }
    function range(t0, t1, dt) {
      var time = ceil(t0), times = [];
      if (dt > 1) {
        while (time < t1) {
          if (!(number(time) % dt)) times.push(new Date(+time));
          step(time, 1);
        }
      } else {
        while (time < t1) times.push(new Date(+time)), step(time, 1);
      }
      return times;
    }
    function range_utc(t0, t1, dt) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = t0;
        return range(utc, t1, dt);
      } finally {
        d3_date = Date;
      }
    }
    local.floor = local;
    local.round = round;
    local.ceil = ceil;
    local.offset = offset;
    local.range = range;
    var utc = local.utc = d3_time_interval_utc(local);
    utc.floor = utc;
    utc.round = d3_time_interval_utc(round);
    utc.ceil = d3_time_interval_utc(ceil);
    utc.offset = d3_time_interval_utc(offset);
    utc.range = range_utc;
    return local;
  }
  function d3_time_interval_utc(method) {
    return function(date, k) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = date;
        return method(utc, k)._;
      } finally {
        d3_date = Date;
      }
    };
  }
  d3_time.year = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setMonth(0, 1);
    return date;
  }, function(date, offset) {
    date.setFullYear(date.getFullYear() + offset);
  }, function(date) {
    return date.getFullYear();
  });
  d3_time.years = d3_time.year.range;
  d3_time.years.utc = d3_time.year.utc.range;
  d3_time.day = d3_time_interval(function(date) {
    var day = new d3_date(2e3, 0);
    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    return day;
  }, function(date, offset) {
    date.setDate(date.getDate() + offset);
  }, function(date) {
    return date.getDate() - 1;
  });
  d3_time.days = d3_time.day.range;
  d3_time.days.utc = d3_time.day.utc.range;
  d3_time.dayOfYear = function(date) {
    var year = d3_time.year(date);
    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
  };
  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
    i = 7 - i;
    var interval = d3_time[day] = d3_time_interval(function(date) {
      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
      return date;
    }, function(date, offset) {
      date.setDate(date.getDate() + Math.floor(offset) * 7);
    }, function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
    });
    d3_time[day + "s"] = interval.range;
    d3_time[day + "s"].utc = interval.utc.range;
    d3_time[day + "OfYear"] = function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
    };
  });
  d3_time.week = d3_time.sunday;
  d3_time.weeks = d3_time.sunday.range;
  d3_time.weeks.utc = d3_time.sunday.utc.range;
  d3_time.weekOfYear = d3_time.sundayOfYear;
  function d3_locale_timeFormat(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    function d3_time_format(template) {
      var n = template.length;
      function format(date) {
        var string = [], i = -1, j = 0, c, p, f;
        while (++i < n) {
          if (template.charCodeAt(i) === 37) {
            string.push(template.slice(j, i));
            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
            string.push(c);
            j = i + 1;
          }
        }
        string.push(template.slice(j, i));
        return string.join("");
      }
      format.parse = function(string) {
        var d = {
          y: 1900,
          m: 0,
          d: 1,
          H: 0,
          M: 0,
          S: 0,
          L: 0,
          Z: null
        }, i = d3_time_parse(d, template, string, 0);
        if (i != string.length) return null;
        if ("p" in d) d.H = d.H % 12 + d.p * 12;
        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("w" in d && ("W" in d || "U" in d)) {
          date.setFullYear(d.y, 0, 1);
          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
        } else date.setFullYear(d.y, d.m, d.d);
        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
        return localZ ? date._ : date;
      };
      format.toString = function() {
        return template;
      };
      return format;
    }
    function d3_time_parse(date, template, string, j) {
      var c, p, t, i = 0, n = template.length, m = string.length;
      while (i < n) {
        if (j >= m) return -1;
        c = template.charCodeAt(i++);
        if (c === 37) {
          t = template.charAt(i++);
          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
          if (!p || (j = p(date, string, j)) < 0) return -1;
        } else if (c != string.charCodeAt(j++)) {
          return -1;
        }
      }
      return j;
    }
    d3_time_format.utc = function(template) {
      var local = d3_time_format(template);
      function format(date) {
        try {
          d3_date = d3_date_utc;
          var utc = new d3_date();
          utc._ = date;
          return local(utc);
        } finally {
          d3_date = Date;
        }
      }
      format.parse = function(string) {
        try {
          d3_date = d3_date_utc;
          var date = local.parse(string);
          return date && date._;
        } finally {
          d3_date = Date;
        }
      };
      format.toString = local.toString;
      return format;
    };
    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
    locale_periods.forEach(function(p, i) {
      d3_time_periodLookup.set(p.toLowerCase(), i);
    });
    var d3_time_formats = {
      a: function(d) {
        return locale_shortDays[d.getDay()];
      },
      A: function(d) {
        return locale_days[d.getDay()];
      },
      b: function(d) {
        return locale_shortMonths[d.getMonth()];
      },
      B: function(d) {
        return locale_months[d.getMonth()];
      },
      c: d3_time_format(locale_dateTime),
      d: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      e: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      H: function(d, p) {
        return d3_time_formatPad(d.getHours(), p, 2);
      },
      I: function(d, p) {
        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
      },
      j: function(d, p) {
        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
      },
      L: function(d, p) {
        return d3_time_formatPad(d.getMilliseconds(), p, 3);
      },
      m: function(d, p) {
        return d3_time_formatPad(d.getMonth() + 1, p, 2);
      },
      M: function(d, p) {
        return d3_time_formatPad(d.getMinutes(), p, 2);
      },
      p: function(d) {
        return locale_periods[+(d.getHours() >= 12)];
      },
      S: function(d, p) {
        return d3_time_formatPad(d.getSeconds(), p, 2);
      },
      U: function(d, p) {
        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
      },
      w: function(d) {
        return d.getDay();
      },
      W: function(d, p) {
        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
      },
      x: d3_time_format(locale_date),
      X: d3_time_format(locale_time),
      y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
      },
      Y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
      },
      Z: d3_time_zone,
      "%": function() {
        return "%";
      }
    };
    var d3_time_parsers = {
      a: d3_time_parseWeekdayAbbrev,
      A: d3_time_parseWeekday,
      b: d3_time_parseMonthAbbrev,
      B: d3_time_parseMonth,
      c: d3_time_parseLocaleFull,
      d: d3_time_parseDay,
      e: d3_time_parseDay,
      H: d3_time_parseHour24,
      I: d3_time_parseHour24,
      j: d3_time_parseDayOfYear,
      L: d3_time_parseMilliseconds,
      m: d3_time_parseMonthNumber,
      M: d3_time_parseMinutes,
      p: d3_time_parseAmPm,
      S: d3_time_parseSeconds,
      U: d3_time_parseWeekNumberSunday,
      w: d3_time_parseWeekdayNumber,
      W: d3_time_parseWeekNumberMonday,
      x: d3_time_parseLocaleDate,
      X: d3_time_parseLocaleTime,
      y: d3_time_parseYear,
      Y: d3_time_parseFullYear,
      Z: d3_time_parseZone,
      "%": d3_time_parseLiteralPercent
    };
    function d3_time_parseWeekdayAbbrev(date, string, i) {
      d3_time_dayAbbrevRe.lastIndex = 0;
      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseWeekday(date, string, i) {
      d3_time_dayRe.lastIndex = 0;
      var n = d3_time_dayRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonthAbbrev(date, string, i) {
      d3_time_monthAbbrevRe.lastIndex = 0;
      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonth(date, string, i) {
      d3_time_monthRe.lastIndex = 0;
      var n = d3_time_monthRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseLocaleFull(date, string, i) {
      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
    }
    function d3_time_parseLocaleDate(date, string, i) {
      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
    }
    function d3_time_parseLocaleTime(date, string, i) {
      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
    }
    function d3_time_parseAmPm(date, string, i) {
      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
      return n == null ? -1 : (date.p = n, i);
    }
    return d3_time_format;
  }
  var d3_time_formatPads = {
    "-": "",
    _: " ",
    "0": "0"
  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
  function d3_time_formatPad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
  }
  function d3_time_formatRe(names) {
    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
  }
  function d3_time_formatLookup(names) {
    var map = new d3_Map(), i = -1, n = names.length;
    while (++i < n) map.set(names[i].toLowerCase(), i);
    return map;
  }
  function d3_time_parseWeekdayNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
    return n ? (date.w = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberSunday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.U = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberMonday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.W = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseFullYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
    return n ? (date.y = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
  }
  function d3_time_parseZone(date, string, i) {
    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, 
    i + 5) : -1;
  }
  function d3_time_expandYear(d) {
    return d + (d > 68 ? 1900 : 2e3);
  }
  function d3_time_parseMonthNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
  }
  function d3_time_parseDay(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.d = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseDayOfYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.j = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseHour24(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.H = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMinutes(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.M = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseSeconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.S = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMilliseconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.L = +n[0], i + n[0].length) : -1;
  }
  function d3_time_zone(d) {
    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs(z) / 60 | 0, zm = abs(z) % 60;
    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
  }
  function d3_time_parseLiteralPercent(date, string, i) {
    d3_time_percentRe.lastIndex = 0;
    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  function d3_time_formatMulti(formats) {
    var n = formats.length, i = -1;
    while (++i < n) formats[i][0] = this(formats[i][0]);
    return function(date) {
      var i = 0, f = formats[i];
      while (!f[1](date)) f = formats[++i];
      return f[0](date);
    };
  }
  d3.locale = function(locale) {
    return {
      numberFormat: d3_locale_numberFormat(locale),
      timeFormat: d3_locale_timeFormat(locale)
    };
  };
  var d3_locale_enUS = d3.locale({
    decimal: ".",
    thousands: ",",
    grouping: [ 3 ],
    currency: [ "$", "" ],
    dateTime: "%a %b %e %X %Y",
    date: "%m/%d/%Y",
    time: "%H:%M:%S",
    periods: [ "AM", "PM" ],
    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
  });
  d3.format = d3_locale_enUS.numberFormat;
  d3.geo = {};
  function d3_adder() {}
  d3_adder.prototype = {
    s: 0,
    t: 0,
    add: function(y) {
      d3_adderSum(y, this.t, d3_adderTemp);
      d3_adderSum(d3_adderTemp.s, this.s, this);
      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
    },
    reset: function() {
      this.s = this.t = 0;
    },
    valueOf: function() {
      return this.s;
    }
  };
  var d3_adderTemp = new d3_adder();
  function d3_adderSum(a, b, o) {
    var x = o.s = a + b, bv = x - a, av = x - bv;
    o.t = a - av + (b - bv);
  }
  d3.geo.stream = function(object, listener) {
    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
      d3_geo_streamObjectType[object.type](object, listener);
    } else {
      d3_geo_streamGeometry(object, listener);
    }
  };
  function d3_geo_streamGeometry(geometry, listener) {
    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
      d3_geo_streamGeometryType[geometry.type](geometry, listener);
    }
  }
  var d3_geo_streamObjectType = {
    Feature: function(feature, listener) {
      d3_geo_streamGeometry(feature.geometry, listener);
    },
    FeatureCollection: function(object, listener) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
    }
  };
  var d3_geo_streamGeometryType = {
    Sphere: function(object, listener) {
      listener.sphere();
    },
    Point: function(object, listener) {
      object = object.coordinates;
      listener.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
    },
    LineString: function(object, listener) {
      d3_geo_streamLine(object.coordinates, listener, 0);
    },
    MultiLineString: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
    },
    Polygon: function(object, listener) {
      d3_geo_streamPolygon(object.coordinates, listener);
    },
    MultiPolygon: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
    },
    GeometryCollection: function(object, listener) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
    }
  };
  function d3_geo_streamLine(coordinates, listener, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    listener.lineStart();
    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
    listener.lineEnd();
  }
  function d3_geo_streamPolygon(coordinates, listener) {
    var i = -1, n = coordinates.length;
    listener.polygonStart();
    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
    listener.polygonEnd();
  }
  d3.geo.area = function(object) {
    d3_geo_areaSum = 0;
    d3.geo.stream(object, d3_geo_area);
    return d3_geo_areaSum;
  };
  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
  var d3_geo_area = {
    sphere: function() {
      d3_geo_areaSum += 4 * π;
    },
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_areaRingSum.reset();
      d3_geo_area.lineStart = d3_geo_areaRingStart;
    },
    polygonEnd: function() {
      var area = 2 * d3_geo_areaRingSum;
      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
    }
  };
  function d3_geo_areaRingStart() {
    var λ00, φ00, λ0, cosφ0, sinφ0;
    d3_geo_area.point = function(λ, φ) {
      d3_geo_area.point = nextPoint;
      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
      sinφ0 = Math.sin(φ);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      φ = φ * d3_radians / 2 + π / 4;
      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
      d3_geo_areaRingSum.add(Math.atan2(v, u));
      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
    }
    d3_geo_area.lineEnd = function() {
      nextPoint(λ00, φ00);
    };
  }
  function d3_geo_cartesian(spherical) {
    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
  }
  function d3_geo_cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function d3_geo_cartesianCross(a, b) {
    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
  }
  function d3_geo_cartesianAdd(a, b) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
  }
  function d3_geo_cartesianScale(vector, k) {
    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
  }
  function d3_geo_cartesianNormalize(d) {
    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l;
    d[1] /= l;
    d[2] /= l;
  }
  function d3_geo_spherical(cartesian) {
    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
  }
  function d3_geo_sphericalEqual(a, b) {
    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
  }
  d3.geo.bounds = function() {
    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
    var bound = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        bound.point = ringPoint;
        bound.lineStart = ringStart;
        bound.lineEnd = ringEnd;
        dλSum = 0;
        d3_geo_area.polygonStart();
      },
      polygonEnd: function() {
        d3_geo_area.polygonEnd();
        bound.point = point;
        bound.lineStart = lineStart;
        bound.lineEnd = lineEnd;
        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
        range[0] = λ0, range[1] = λ1;
      }
    };
    function point(λ, φ) {
      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
      if (φ < φ0) φ0 = φ;
      if (φ > φ1) φ1 = φ;
    }
    function linePoint(λ, φ) {
      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
      if (p0) {
        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
        d3_geo_cartesianNormalize(inflection);
        inflection = d3_geo_spherical(inflection);
        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = inflection[1] * d3_degrees;
          if (φi > φ1) φ1 = φi;
        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = -inflection[1] * d3_degrees;
          if (φi < φ0) φ0 = φi;
        } else {
          if (φ < φ0) φ0 = φ;
          if (φ > φ1) φ1 = φ;
        }
        if (antimeridian) {
          if (λ < λ_) {
            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
          } else {
            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
          }
        } else {
          if (λ1 >= λ0) {
            if (λ < λ0) λ0 = λ;
            if (λ > λ1) λ1 = λ;
          } else {
            if (λ > λ_) {
              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
            } else {
              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
            }
          }
        }
      } else {
        point(λ, φ);
      }
      p0 = p, λ_ = λ;
    }
    function lineStart() {
      bound.point = linePoint;
    }
    function lineEnd() {
      range[0] = λ0, range[1] = λ1;
      bound.point = point;
      p0 = null;
    }
    function ringPoint(λ, φ) {
      if (p0) {
        var dλ = λ - λ_;
        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
      } else λ__ = λ, φ__ = φ;
      d3_geo_area.point(λ, φ);
      linePoint(λ, φ);
    }
    function ringStart() {
      d3_geo_area.lineStart();
    }
    function ringEnd() {
      ringPoint(λ__, φ__);
      d3_geo_area.lineEnd();
      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
      range[0] = λ0, range[1] = λ1;
      p0 = null;
    }
    function angle(λ0, λ1) {
      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
    }
    function compareRanges(a, b) {
      return a[0] - b[0];
    }
    function withinRange(x, range) {
      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
    }
    return function(feature) {
      φ1 = λ1 = -(λ0 = φ0 = Infinity);
      ranges = [];
      d3.geo.stream(feature, bound);
      var n = ranges.length;
      if (n) {
        ranges.sort(compareRanges);
        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
          b = ranges[i];
          if (withinRange(b[0], a) || withinRange(b[1], a)) {
            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
          } else {
            merged.push(a = b);
          }
        }
        var best = -Infinity, dλ;
        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
          b = merged[i];
          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
        }
      }
      ranges = range = null;
      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
    };
  }();
  d3.geo.centroid = function(object) {
    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
    d3.geo.stream(object, d3_geo_centroid);
    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
    if (m < ε2) {
      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
      m = x * x + y * y + z * z;
      if (m < ε2) return [ NaN, NaN ];
    }
    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
  };
  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
  var d3_geo_centroid = {
    sphere: d3_noop,
    point: d3_geo_centroidPoint,
    lineStart: d3_geo_centroidLineStart,
    lineEnd: d3_geo_centroidLineEnd,
    polygonStart: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
    }
  };
  function d3_geo_centroidPoint(λ, φ) {
    λ *= d3_radians;
    var cosφ = Math.cos(φ *= d3_radians);
    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
  }
  function d3_geo_centroidPointXYZ(x, y, z) {
    ++d3_geo_centroidW0;
    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
  }
  function d3_geo_centroidLineStart() {
    var x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroid.point = nextPoint;
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_centroidLineEnd() {
    d3_geo_centroid.point = d3_geo_centroidPoint;
  }
  function d3_geo_centroidRingStart() {
    var λ00, φ00, x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ00 = λ, φ00 = φ;
      d3_geo_centroid.point = nextPoint;
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    d3_geo_centroid.lineEnd = function() {
      nextPoint(λ00, φ00);
      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
      d3_geo_centroid.point = d3_geo_centroidPoint;
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
      d3_geo_centroidX2 += v * cx;
      d3_geo_centroidY2 += v * cy;
      d3_geo_centroidZ2 += v * cz;
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_compose(a, b) {
    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
  }
  function d3_true() {
    return true;
  }
  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
    var subject = [], clip = [];
    segments.forEach(function(segment) {
      if ((n = segment.length - 1) <= 0) return;
      var n, p0 = segment[0], p1 = segment[n];
      if (d3_geo_sphericalEqual(p0, p1)) {
        listener.lineStart();
        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
        listener.lineEnd();
        return;
      }
      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
      a.o = b;
      subject.push(a);
      clip.push(b);
      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
      a.o = b;
      subject.push(a);
      clip.push(b);
    });
    clip.sort(compare);
    d3_geo_clipPolygonLinkCircular(subject);
    d3_geo_clipPolygonLinkCircular(clip);
    if (!subject.length) return;
    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
      clip[i].e = entry = !entry;
    }
    var start = subject[0], points, point;
    while (1) {
      var current = start, isSubject = true;
      while (current.v) if ((current = current.n) === start) return;
      points = current.z;
      listener.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.n.x, 1, listener);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.p.x, -1, listener);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      listener.lineEnd();
    }
  }
  function d3_geo_clipPolygonLinkCircular(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while (++i < n) {
      a.n = b = array[i];
      b.p = a;
      a = b;
    }
    a.n = b = array[0];
    b.p = a;
  }
  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other;
    this.e = entry;
    this.v = false;
    this.n = this.p = null;
  }
  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
    return function(rotate, listener) {
      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = d3.merge(segments);
          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
          if (segments.length) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
          } else if (clipStartInside) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            interpolate(null, null, 1, listener);
            listener.lineEnd();
          }
          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function() {
          listener.polygonStart();
          listener.lineStart();
          interpolate(null, null, 1, listener);
          listener.lineEnd();
          listener.polygonEnd();
        }
      };
      function point(λ, φ) {
        var point = rotate(λ, φ);
        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
      }
      function pointLine(λ, φ) {
        var point = rotate(λ, φ);
        line.point(point[0], point[1]);
      }
      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }
      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }
      var segments;
      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
      function pointRing(λ, φ) {
        ring.push([ λ, φ ]);
        var point = rotate(λ, φ);
        ringListener.point(point[0], point[1]);
      }
      function ringStart() {
        ringListener.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringListener.lineEnd();
        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
        ring.pop();
        polygon.push(ring);
        ring = null;
        if (!n) return;
        if (clean & 1) {
          segment = ringSegments[0];
          var n = segment.length - 1, i = -1, point;
          if (n > 0) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            while (++i < n) listener.point((point = segment[i])[0], point[1]);
            listener.lineEnd();
          }
          return;
        }
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
      }
      return clip;
    };
  }
  function d3_geo_clipSegmentLength1(segment) {
    return segment.length > 1;
  }
  function d3_geo_clipBufferListener() {
    var lines = [], line;
    return {
      lineStart: function() {
        lines.push(line = []);
      },
      point: function(λ, φ) {
        line.push([ λ, φ ]);
      },
      lineEnd: d3_noop,
      buffer: function() {
        var buffer = lines;
        lines = [];
        line = null;
        return buffer;
      },
      rejoin: function() {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      }
    };
  }
  function d3_geo_clipSort(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
  }
  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
  function d3_geo_clipAntimeridianLine(listener) {
    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
    return {
      lineStart: function() {
        listener.lineStart();
        clean = 1;
      },
      point: function(λ1, φ1) {
        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
        if (abs(dλ - π) < ε) {
          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          listener.point(λ1, φ0);
          clean = 0;
        } else if (sλ0 !== sλ1 && dλ >= π) {
          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          clean = 0;
        }
        listener.point(λ0 = λ1, φ0 = φ1);
        sλ0 = sλ1;
      },
      lineEnd: function() {
        listener.lineEnd();
        λ0 = φ0 = NaN;
      },
      clean: function() {
        return 2 - clean;
      }
    };
  }
  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
  }
  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
    var φ;
    if (from == null) {
      φ = direction * halfπ;
      listener.point(-π, φ);
      listener.point(0, φ);
      listener.point(π, φ);
      listener.point(π, 0);
      listener.point(π, -φ);
      listener.point(0, -φ);
      listener.point(-π, -φ);
      listener.point(-π, 0);
      listener.point(-π, φ);
    } else if (abs(from[0] - to[0]) > ε) {
      var s = from[0] < to[0] ? π : -π;
      φ = direction * s / 2;
      listener.point(-s, φ);
      listener.point(0, φ);
      listener.point(s, φ);
    } else {
      listener.point(to[0], to[1]);
    }
  }
  function d3_geo_pointInPolygon(point, polygon) {
    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
    d3_geo_areaRingSum.reset();
    for (var i = 0, n = polygon.length; i < n; ++i) {
      var ring = polygon[i], m = ring.length;
      if (!m) continue;
      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
      while (true) {
        if (j === m) j = 0;
        point = ring[j];
        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
          d3_geo_cartesianNormalize(arc);
          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
          d3_geo_cartesianNormalize(intersection);
          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
          }
        }
        if (!j++) break;
        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
      }
    }
    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < 0) ^ winding & 1;
  }
  function d3_geo_clipCircle(radius) {
    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
    function visible(λ, φ) {
      return Math.cos(λ) * Math.cos(φ) > cr;
    }
    function clipLine(listener) {
      var point0, c0, v0, v00, clean;
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(λ, φ) {
          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
          if (!point0 && (v00 = v0 = v)) listener.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
              point1[0] += ε;
              point1[1] += ε;
              v = visible(point1[0], point1[1]);
            }
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              listener.lineStart();
              point2 = intersect(point1, point0);
              listener.point(point2[0], point2[1]);
            } else {
              point2 = intersect(point0, point1);
              listener.point(point2[0], point2[1]);
              listener.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
              } else {
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
              }
            }
          }
          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
            listener.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v, c0 = c;
        },
        lineEnd: function() {
          if (v0) listener.lineEnd();
          point0 = null;
        },
        clean: function() {
          return clean | (v00 && v0) << 1;
        }
      };
    }
    function intersect(a, b, two) {
      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
      if (!determinant) return !two && a;
      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
      d3_geo_cartesianAdd(A, B);
      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
      if (t2 < 0) return;
      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
      d3_geo_cartesianAdd(q, A);
      q = d3_geo_spherical(q);
      if (!two) return q;
      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
        d3_geo_cartesianAdd(q1, A);
        return [ q, d3_geo_spherical(q1) ];
      }
    }
    function code(λ, φ) {
      var r = smallRadius ? radius : π - radius, code = 0;
      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
      return code;
    }
  }
  function d3_geom_clipLine(x0, y0, x1, y1) {
    return function(line) {
      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
      r = x0 - ax;
      if (!dx && r > 0) return;
      r /= dx;
      if (dx < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dx > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = x1 - ax;
      if (!dx && r < 0) return;
      r /= dx;
      if (dx < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dx > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      r = y0 - ay;
      if (!dy && r > 0) return;
      r /= dy;
      if (dy < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dy > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = y1 - ay;
      if (!dy && r < 0) return;
      r /= dy;
      if (dy < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dy > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      if (t0 > 0) line.a = {
        x: ax + t0 * dx,
        y: ay + t0 * dy
      };
      if (t1 < 1) line.b = {
        x: ax + t1 * dx,
        y: ay + t1 * dy
      };
      return line;
    };
  }
  var d3_geo_clipExtentMAX = 1e9;
  d3.geo.clipExtent = function() {
    var x0, y0, x1, y1, stream, clip, clipExtent = {
      stream: function(output) {
        if (stream) stream.valid = false;
        stream = clip(output);
        stream.valid = true;
        return stream;
      },
      extent: function(_) {
        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
        if (stream) stream.valid = false, stream = null;
        return clipExtent;
      }
    };
    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
  };
  function d3_geo_clipExtent(x0, y0, x1, y1) {
    return function(listener) {
      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          listener = bufferListener;
          segments = [];
          polygon = [];
          clean = true;
        },
        polygonEnd: function() {
          listener = listener_;
          segments = d3.merge(segments);
          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
          if (inside || visible) {
            listener.polygonStart();
            if (inside) {
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
            }
            if (visible) {
              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
            }
            listener.polygonEnd();
          }
          segments = polygon = ring = null;
        }
      };
      function insidePolygon(p) {
        var wn = 0, n = polygon.length, y = p[1];
        for (var i = 0; i < n; ++i) {
          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
            b = v[j];
            if (a[1] <= y) {
              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
            } else {
              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
            }
            a = b;
          }
        }
        return wn !== 0;
      }
      function interpolate(from, to, direction, listener) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
          do {
            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
          } while ((a = (a + direction + 4) % 4) !== a1);
        } else {
          listener.point(to[0], to[1]);
        }
      }
      function pointVisible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
      }
      function point(x, y) {
        if (pointVisible(x, y)) listener.point(x, y);
      }
      var x__, y__, v__, x_, y_, v_, first, clean;
      function lineStart() {
        clip.point = linePoint;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }
      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_) bufferListener.rejoin();
          segments.push(bufferListener.buffer());
        }
        clip.point = point;
        if (v_) listener.lineEnd();
      }
      function linePoint(x, y) {
        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
        var v = pointVisible(x, y);
        if (polygon) ring.push([ x, y ]);
        if (first) {
          x__ = x, y__ = y, v__ = v;
          first = false;
          if (v) {
            listener.lineStart();
            listener.point(x, y);
          }
        } else {
          if (v && v_) listener.point(x, y); else {
            var l = {
              a: {
                x: x_,
                y: y_
              },
              b: {
                x: x,
                y: y
              }
            };
            if (clipLine(l)) {
              if (!v_) {
                listener.lineStart();
                listener.point(l.a.x, l.a.y);
              }
              listener.point(l.b.x, l.b.y);
              if (!v) listener.lineEnd();
              clean = false;
            } else if (v) {
              listener.lineStart();
              listener.point(x, y);
              clean = false;
            }
          }
        }
        x_ = x, y_ = y, v_ = v;
      }
      return clip;
    };
    function corner(p, direction) {
      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
    }
    function compare(a, b) {
      return comparePoints(a.x, b.x);
    }
    function comparePoints(a, b) {
      var ca = corner(a, 1), cb = corner(b, 1);
      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
  }
  function d3_geo_conic(projectAt) {
    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
    p.parallels = function(_) {
      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
    };
    return p;
  }
  function d3_geo_conicEqualArea(φ0, φ1) {
    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
    function forward(λ, φ) {
      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = ρ0 - y;
      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
    };
    return forward;
  }
  (d3.geo.conicEqualArea = function() {
    return d3_geo_conic(d3_geo_conicEqualArea);
  }).raw = d3_geo_conicEqualArea;
  d3.geo.albers = function() {
    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
  };
  d3.geo.albersUsa = function() {
    var lower48 = d3.geo.albers();
    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
    var point, pointStream = {
      point: function(x, y) {
        point = [ x, y ];
      }
    }, lower48Point, alaskaPoint, hawaiiPoint;
    function albersUsa(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      point = null;
      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
      return point;
    }
    albersUsa.invert = function(coordinates) {
      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function(stream) {
      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
      return {
        point: function(x, y) {
          lower48Stream.point(x, y);
          alaskaStream.point(x, y);
          hawaiiStream.point(x, y);
        },
        sphere: function() {
          lower48Stream.sphere();
          alaskaStream.sphere();
          hawaiiStream.sphere();
        },
        lineStart: function() {
          lower48Stream.lineStart();
          alaskaStream.lineStart();
          hawaiiStream.lineStart();
        },
        lineEnd: function() {
          lower48Stream.lineEnd();
          alaskaStream.lineEnd();
          hawaiiStream.lineEnd();
        },
        polygonStart: function() {
          lower48Stream.polygonStart();
          alaskaStream.polygonStart();
          hawaiiStream.polygonStart();
        },
        polygonEnd: function() {
          lower48Stream.polygonEnd();
          alaskaStream.polygonEnd();
          hawaiiStream.polygonEnd();
        }
      };
    };
    albersUsa.precision = function(_) {
      if (!arguments.length) return lower48.precision();
      lower48.precision(_);
      alaska.precision(_);
      hawaii.precision(_);
      return albersUsa;
    };
    albersUsa.scale = function(_) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(_);
      alaska.scale(_ * .35);
      hawaii.scale(_);
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(_) {
      if (!arguments.length) return lower48.translate();
      var k = lower48.scale(), x = +_[0], y = +_[1];
      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      return albersUsa;
    };
    return albersUsa.scale(1070);
  };
  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_pathAreaPolygon = 0;
      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
    }
  };
  function d3_geo_pathAreaRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathArea.point = function(x, y) {
      d3_geo_pathArea.point = nextPoint;
      x00 = x0 = x, y00 = y0 = y;
    };
    function nextPoint(x, y) {
      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
      x0 = x, y0 = y;
    }
    d3_geo_pathArea.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
  var d3_geo_pathBounds = {
    point: d3_geo_pathBoundsPoint,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_pathBoundsPoint(x, y) {
    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
  }
  function d3_geo_pathBuffer() {
    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointCircle = d3_geo_pathBufferCircle(_);
        return stream;
      },
      result: function() {
        if (buffer.length) {
          var result = buffer.join("");
          buffer = [];
          return result;
        }
      }
    };
    function point(x, y) {
      buffer.push("M", x, ",", y, pointCircle);
    }
    function pointLineStart(x, y) {
      buffer.push("M", x, ",", y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      buffer.push("L", x, ",", y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      buffer.push("Z");
    }
    return stream;
  }
  function d3_geo_pathBufferCircle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
  }
  var d3_geo_pathCentroid = {
    point: d3_geo_pathCentroidPoint,
    lineStart: d3_geo_pathCentroidLineStart,
    lineEnd: d3_geo_pathCentroidLineEnd,
    polygonStart: function() {
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
    }
  };
  function d3_geo_pathCentroidPoint(x, y) {
    d3_geo_centroidX0 += x;
    d3_geo_centroidY0 += y;
    ++d3_geo_centroidZ0;
  }
  function d3_geo_pathCentroidLineStart() {
    var x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
  }
  function d3_geo_pathCentroidLineEnd() {
    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
  }
  function d3_geo_pathCentroidRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      z = y0 * x - x0 * y;
      d3_geo_centroidX2 += z * (x0 + x);
      d3_geo_centroidY2 += z * (y0 + y);
      d3_geo_centroidZ2 += z * 3;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
    d3_geo_pathCentroid.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  function d3_geo_pathContext(context) {
    var pointRadius = 4.5;
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointRadius = _;
        return stream;
      },
      result: d3_noop
    };
    function point(x, y) {
      context.moveTo(x + pointRadius, y);
      context.arc(x, y, pointRadius, 0, τ);
    }
    function pointLineStart(x, y) {
      context.moveTo(x, y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      context.lineTo(x, y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      context.closePath();
    }
    return stream;
  }
  function d3_geo_resample(project) {
    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
    function resample(stream) {
      return (maxDepth ? resampleRecursive : resampleNone)(stream);
    }
    function resampleNone(stream) {
      return d3_geo_transformPoint(stream, function(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      });
    }
    function resampleRecursive(stream) {
      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
      var resample = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          stream.polygonStart();
          resample.lineStart = ringStart;
        },
        polygonEnd: function() {
          stream.polygonEnd();
          resample.lineStart = lineStart;
        }
      };
      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }
      function lineStart() {
        x0 = NaN;
        resample.point = linePoint;
        stream.lineStart();
      }
      function linePoint(λ, φ) {
        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }
      function lineEnd() {
        resample.point = point;
        stream.lineEnd();
      }
      function ringStart() {
        lineStart();
        resample.point = ringPoint;
        resample.lineEnd = ringEnd;
      }
      function ringPoint(λ, φ) {
        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
        resample.point = linePoint;
      }
      function ringEnd() {
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
        resample.lineEnd = lineEnd;
        lineEnd();
      }
      return resample;
    }
    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
      if (d2 > 4 * δ2 && depth--) {
        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
        }
      }
    }
    resample.precision = function(_) {
      if (!arguments.length) return Math.sqrt(δ2);
      maxDepth = (δ2 = _ * _) > 0 && 16;
      return resample;
    };
    return resample;
  }
  d3.geo.path = function() {
    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
    function path(object) {
      if (object) {
        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
        d3.geo.stream(object, cacheStream);
      }
      return contextStream.result();
    }
    path.area = function(object) {
      d3_geo_pathAreaSum = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathArea));
      return d3_geo_pathAreaSum;
    };
    path.centroid = function(object) {
      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
    };
    path.bounds = function(object) {
      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
    };
    path.projection = function(_) {
      if (!arguments.length) return projection;
      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
      return reset();
    };
    path.context = function(_) {
      if (!arguments.length) return context;
      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
      return reset();
    };
    path.pointRadius = function(_) {
      if (!arguments.length) return pointRadius;
      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
      return path;
    };
    function reset() {
      cacheStream = null;
      return path;
    }
    return path.projection(d3.geo.albersUsa()).context(null);
  };
  function d3_geo_pathProjectStream(project) {
    var resample = d3_geo_resample(function(x, y) {
      return project([ x * d3_degrees, y * d3_degrees ]);
    });
    return function(stream) {
      return d3_geo_projectionRadians(resample(stream));
    };
  }
  d3.geo.transform = function(methods) {
    return {
      stream: function(stream) {
        var transform = new d3_geo_transform(stream);
        for (var k in methods) transform[k] = methods[k];
        return transform;
      }
    };
  };
  function d3_geo_transform(stream) {
    this.stream = stream;
  }
  d3_geo_transform.prototype = {
    point: function(x, y) {
      this.stream.point(x, y);
    },
    sphere: function() {
      this.stream.sphere();
    },
    lineStart: function() {
      this.stream.lineStart();
    },
    lineEnd: function() {
      this.stream.lineEnd();
    },
    polygonStart: function() {
      this.stream.polygonStart();
    },
    polygonEnd: function() {
      this.stream.polygonEnd();
    }
  };
  function d3_geo_transformPoint(stream, point) {
    return {
      point: point,
      sphere: function() {
        stream.sphere();
      },
      lineStart: function() {
        stream.lineStart();
      },
      lineEnd: function() {
        stream.lineEnd();
      },
      polygonStart: function() {
        stream.polygonStart();
      },
      polygonEnd: function() {
        stream.polygonEnd();
      }
    };
  }
  d3.geo.projection = d3_geo_projection;
  d3.geo.projectionMutator = d3_geo_projectionMutator;
  function d3_geo_projection(project) {
    return d3_geo_projectionMutator(function() {
      return project;
    })();
  }
  function d3_geo_projectionMutator(projectAt) {
    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
      x = project(x, y);
      return [ x[0] * k + δx, δy - x[1] * k ];
    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
    function projection(point) {
      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
      return [ point[0] * k + δx, δy - point[1] * k ];
    }
    function invert(point) {
      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
    }
    projection.stream = function(output) {
      if (stream) stream.valid = false;
      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
      stream.valid = true;
      return stream;
    };
    projection.clipAngle = function(_) {
      if (!arguments.length) return clipAngle;
      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
      return invalidate();
    };
    projection.clipExtent = function(_) {
      if (!arguments.length) return clipExtent;
      clipExtent = _;
      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
      return invalidate();
    };
    projection.scale = function(_) {
      if (!arguments.length) return k;
      k = +_;
      return reset();
    };
    projection.translate = function(_) {
      if (!arguments.length) return [ x, y ];
      x = +_[0];
      y = +_[1];
      return reset();
    };
    projection.center = function(_) {
      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
      λ = _[0] % 360 * d3_radians;
      φ = _[1] % 360 * d3_radians;
      return reset();
    };
    projection.rotate = function(_) {
      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
      δλ = _[0] % 360 * d3_radians;
      δφ = _[1] % 360 * d3_radians;
      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
      return reset();
    };
    d3.rebind(projection, projectResample, "precision");
    function reset() {
      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
      var center = project(λ, φ);
      δx = x - center[0] * k;
      δy = y + center[1] * k;
      return invalidate();
    }
    function invalidate() {
      if (stream) stream.valid = false, stream = null;
      return projection;
    }
    return function() {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return reset();
    };
  }
  function d3_geo_projectionRadians(stream) {
    return d3_geo_transformPoint(stream, function(x, y) {
      stream.point(x * d3_radians, y * d3_radians);
    });
  }
  function d3_geo_equirectangular(λ, φ) {
    return [ λ, φ ];
  }
  (d3.geo.equirectangular = function() {
    return d3_geo_projection(d3_geo_equirectangular);
  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
  d3.geo.rotation = function(rotate) {
    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    }
    forward.invert = function(coordinates) {
      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    };
    return forward;
  };
  function d3_geo_identityRotation(λ, φ) {
    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
  }
  d3_geo_identityRotation.invert = d3_geo_equirectangular;
  function d3_geo_rotation(δλ, δφ, δγ) {
    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
  }
  function d3_geo_forwardRotationλ(δλ) {
    return function(λ, φ) {
      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
    };
  }
  function d3_geo_rotationλ(δλ) {
    var rotation = d3_geo_forwardRotationλ(δλ);
    rotation.invert = d3_geo_forwardRotationλ(-δλ);
    return rotation;
  }
  function d3_geo_rotationφγ(δφ, δγ) {
    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
    function rotation(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
    }
    rotation.invert = function(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
    };
    return rotation;
  }
  d3.geo.circle = function() {
    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
    function circle() {
      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
      interpolate(null, null, 1, {
        point: function(x, y) {
          ring.push(x = rotate(x, y));
          x[0] *= d3_degrees, x[1] *= d3_degrees;
        }
      });
      return {
        type: "Polygon",
        coordinates: [ ring ]
      };
    }
    circle.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return circle;
    };
    circle.angle = function(x) {
      if (!arguments.length) return angle;
      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
      return circle;
    };
    circle.precision = function(_) {
      if (!arguments.length) return precision;
      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
      return circle;
    };
    return circle.angle(90);
  };
  function d3_geo_circleInterpolate(radius, precision) {
    var cr = Math.cos(radius), sr = Math.sin(radius);
    return function(from, to, direction, listener) {
      var step = direction * precision;
      if (from != null) {
        from = d3_geo_circleAngle(cr, from);
        to = d3_geo_circleAngle(cr, to);
        if (direction > 0 ? from < to : from > to) from += direction * τ;
      } else {
        from = radius + direction * τ;
        to = radius - .5 * step;
      }
      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
      }
    };
  }
  function d3_geo_circleAngle(cr, point) {
    var a = d3_geo_cartesian(point);
    a[0] -= cr;
    d3_geo_cartesianNormalize(a);
    var angle = d3_acos(-a[1]);
    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
  }
  d3.geo.distance = function(a, b) {
    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
  };
  d3.geo.graticule = function() {
    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
    function graticule() {
      return {
        type: "MultiLineString",
        coordinates: lines()
      };
    }
    function lines() {
      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
        return abs(x % DX) > ε;
      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
        return abs(y % DY) > ε;
      }).map(y));
    }
    graticule.lines = function() {
      return lines().map(function(coordinates) {
        return {
          type: "LineString",
          coordinates: coordinates
        };
      });
    };
    graticule.outline = function() {
      return {
        type: "Polygon",
        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
      };
    };
    graticule.extent = function(_) {
      if (!arguments.length) return graticule.minorExtent();
      return graticule.majorExtent(_).minorExtent(_);
    };
    graticule.majorExtent = function(_) {
      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
      X0 = +_[0][0], X1 = +_[1][0];
      Y0 = +_[0][1], Y1 = +_[1][1];
      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
      return graticule.precision(precision);
    };
    graticule.minorExtent = function(_) {
      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };
    graticule.step = function(_) {
      if (!arguments.length) return graticule.minorStep();
      return graticule.majorStep(_).minorStep(_);
    };
    graticule.majorStep = function(_) {
      if (!arguments.length) return [ DX, DY ];
      DX = +_[0], DY = +_[1];
      return graticule;
    };
    graticule.minorStep = function(_) {
      if (!arguments.length) return [ dx, dy ];
      dx = +_[0], dy = +_[1];
      return graticule;
    };
    graticule.precision = function(_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = d3_geo_graticuleX(y0, y1, 90);
      y = d3_geo_graticuleY(x0, x1, precision);
      X = d3_geo_graticuleX(Y0, Y1, 90);
      Y = d3_geo_graticuleY(X0, X1, precision);
      return graticule;
    };
    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
  };
  function d3_geo_graticuleX(y0, y1, dy) {
    var y = d3.range(y0, y1 - ε, dy).concat(y1);
    return function(x) {
      return y.map(function(y) {
        return [ x, y ];
      });
    };
  }
  function d3_geo_graticuleY(x0, x1, dx) {
    var x = d3.range(x0, x1 - ε, dx).concat(x1);
    return function(y) {
      return x.map(function(x) {
        return [ x, y ];
      });
    };
  }
  function d3_source(d) {
    return d.source;
  }
  function d3_target(d) {
    return d.target;
  }
  d3.geo.greatArc = function() {
    var source = d3_source, source_, target = d3_target, target_;
    function greatArc() {
      return {
        type: "LineString",
        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
      };
    }
    greatArc.distance = function() {
      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
    };
    greatArc.source = function(_) {
      if (!arguments.length) return source;
      source = _, source_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.target = function(_) {
      if (!arguments.length) return target;
      target = _, target_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.precision = function() {
      return arguments.length ? greatArc : 0;
    };
    return greatArc;
  };
  d3.geo.interpolate = function(source, target) {
    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
  };
  function d3_geo_interpolate(x0, y0, x1, y1) {
    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
    var interpolate = d ? function(t) {
      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
    } : function() {
      return [ x0 * d3_degrees, y0 * d3_degrees ];
    };
    interpolate.distance = d;
    return interpolate;
  }
  d3.geo.length = function(object) {
    d3_geo_lengthSum = 0;
    d3.geo.stream(object, d3_geo_length);
    return d3_geo_lengthSum;
  };
  var d3_geo_lengthSum;
  var d3_geo_length = {
    sphere: d3_noop,
    point: d3_noop,
    lineStart: d3_geo_lengthLineStart,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_lengthLineStart() {
    var λ0, sinφ0, cosφ0;
    d3_geo_length.point = function(λ, φ) {
      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
      d3_geo_length.point = nextPoint;
    };
    d3_geo_length.lineEnd = function() {
      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
    };
    function nextPoint(λ, φ) {
      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
    }
  }
  function d3_geo_azimuthal(scale, angle) {
    function azimuthal(λ, φ) {
      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
    }
    azimuthal.invert = function(x, y) {
      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
    };
    return azimuthal;
  }
  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
    return Math.sqrt(2 / (1 + cosλcosφ));
  }, function(ρ) {
    return 2 * Math.asin(ρ / 2);
  });
  (d3.geo.azimuthalEqualArea = function() {
    return d3_geo_projection(d3_geo_azimuthalEqualArea);
  }).raw = d3_geo_azimuthalEqualArea;
  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
    var c = Math.acos(cosλcosφ);
    return c && c / Math.sin(c);
  }, d3_identity);
  (d3.geo.azimuthalEquidistant = function() {
    return d3_geo_projection(d3_geo_azimuthalEquidistant);
  }).raw = d3_geo_azimuthalEquidistant;
  function d3_geo_conicConformal(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), t = function(φ) {
      return Math.tan(π / 4 + φ / 2);
    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
    if (!n) return d3_geo_mercator;
    function forward(λ, φ) {
      if (F > 0) {
        if (φ < -halfπ + ε) φ = -halfπ + ε;
      } else {
        if (φ > halfπ - ε) φ = halfπ - ε;
      }
      var ρ = F / Math.pow(t(φ), n);
      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
    };
    return forward;
  }
  (d3.geo.conicConformal = function() {
    return d3_geo_conic(d3_geo_conicConformal);
  }).raw = d3_geo_conicConformal;
  function d3_geo_conicEquidistant(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
    if (abs(n) < ε) return d3_geo_equirectangular;
    function forward(λ, φ) {
      var ρ = G - φ;
      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = G - y;
      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
    };
    return forward;
  }
  (d3.geo.conicEquidistant = function() {
    return d3_geo_conic(d3_geo_conicEquidistant);
  }).raw = d3_geo_conicEquidistant;
  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / cosλcosφ;
  }, Math.atan);
  (d3.geo.gnomonic = function() {
    return d3_geo_projection(d3_geo_gnomonic);
  }).raw = d3_geo_gnomonic;
  function d3_geo_mercator(λ, φ) {
    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
  }
  d3_geo_mercator.invert = function(x, y) {
    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
  };
  function d3_geo_mercatorProjection(project) {
    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
    m.scale = function() {
      var v = scale.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.translate = function() {
      var v = translate.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.clipExtent = function(_) {
      var v = clipExtent.apply(m, arguments);
      if (v === m) {
        if (clipAuto = _ == null) {
          var k = π * scale(), t = translate();
          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
        }
      } else if (clipAuto) {
        v = null;
      }
      return v;
    };
    return m.clipExtent(null);
  }
  (d3.geo.mercator = function() {
    return d3_geo_mercatorProjection(d3_geo_mercator);
  }).raw = d3_geo_mercator;
  var d3_geo_orthographic = d3_geo_azimuthal(function() {
    return 1;
  }, Math.asin);
  (d3.geo.orthographic = function() {
    return d3_geo_projection(d3_geo_orthographic);
  }).raw = d3_geo_orthographic;
  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / (1 + cosλcosφ);
  }, function(ρ) {
    return 2 * Math.atan(ρ);
  });
  (d3.geo.stereographic = function() {
    return d3_geo_projection(d3_geo_stereographic);
  }).raw = d3_geo_stereographic;
  function d3_geo_transverseMercator(λ, φ) {
    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
  }
  d3_geo_transverseMercator.invert = function(x, y) {
    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
  };
  (d3.geo.transverseMercator = function() {
    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
    projection.center = function(_) {
      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
    };
    projection.rotate = function(_) {
      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
      [ _[0], _[1], _[2] - 90 ]);
    };
    return rotate([ 0, 0, 90 ]);
  }).raw = d3_geo_transverseMercator;
  d3.geom = {};
  function d3_geom_pointX(d) {
    return d[0];
  }
  function d3_geom_pointY(d) {
    return d[1];
  }
  d3.geom.hull = function(vertices) {
    var x = d3_geom_pointX, y = d3_geom_pointY;
    if (arguments.length) return hull(vertices);
    function hull(data) {
      if (data.length < 3) return [];
      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
      for (i = 0; i < n; i++) {
        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
      }
      points.sort(d3_geom_hullOrder);
      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
      return polygon;
    }
    hull.x = function(_) {
      return arguments.length ? (x = _, hull) : x;
    };
    hull.y = function(_) {
      return arguments.length ? (y = _, hull) : y;
    };
    return hull;
  };
  function d3_geom_hullUpper(points) {
    var n = points.length, hull = [ 0, 1 ], hs = 2;
    for (var i = 2; i < n; i++) {
      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
      hull[hs++] = i;
    }
    return hull.slice(0, hs);
  }
  function d3_geom_hullOrder(a, b) {
    return a[0] - b[0] || a[1] - b[1];
  }
  d3.geom.polygon = function(coordinates) {
    d3_subclass(coordinates, d3_geom_polygonPrototype);
    return coordinates;
  };
  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
  d3_geom_polygonPrototype.area = function() {
    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
    while (++i < n) {
      a = b;
      b = this[i];
      area += a[1] * b[0] - a[0] * b[1];
    }
    return area * .5;
  };
  d3_geom_polygonPrototype.centroid = function(k) {
    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
    if (!arguments.length) k = -1 / (6 * this.area());
    while (++i < n) {
      a = b;
      b = this[i];
      c = a[0] * b[1] - b[0] * a[1];
      x += (a[0] + b[0]) * c;
      y += (a[1] + b[1]) * c;
    }
    return [ x * k, y * k ];
  };
  d3_geom_polygonPrototype.clip = function(subject) {
    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
    while (++i < n) {
      input = subject.slice();
      subject.length = 0;
      b = this[i];
      c = input[(m = input.length - closed) - 1];
      j = -1;
      while (++j < m) {
        d = input[j];
        if (d3_geom_polygonInside(d, a, b)) {
          if (!d3_geom_polygonInside(c, a, b)) {
            subject.push(d3_geom_polygonIntersect(c, d, a, b));
          }
          subject.push(d);
        } else if (d3_geom_polygonInside(c, a, b)) {
          subject.push(d3_geom_polygonIntersect(c, d, a, b));
        }
        c = d;
      }
      if (closed) subject.push(subject[0]);
      a = b;
    }
    return subject;
  };
  function d3_geom_polygonInside(p, a, b) {
    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
  }
  function d3_geom_polygonIntersect(c, d, a, b) {
    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
    return [ x1 + ua * x21, y1 + ua * y21 ];
  }
  function d3_geom_polygonClosed(coordinates) {
    var a = coordinates[0], b = coordinates[coordinates.length - 1];
    return !(a[0] - b[0] || a[1] - b[1]);
  }
  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
  function d3_geom_voronoiBeach() {
    d3_geom_voronoiRedBlackNode(this);
    this.edge = this.site = this.circle = null;
  }
  function d3_geom_voronoiCreateBeach(site) {
    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
    beach.site = site;
    return beach;
  }
  function d3_geom_voronoiDetachBeach(beach) {
    d3_geom_voronoiDetachCircle(beach);
    d3_geom_voronoiBeaches.remove(beach);
    d3_geom_voronoiBeachPool.push(beach);
    d3_geom_voronoiRedBlackNode(beach);
  }
  function d3_geom_voronoiRemoveBeach(beach) {
    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
      x: x,
      y: y
    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
    d3_geom_voronoiDetachBeach(beach);
    var lArc = previous;
    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
      previous = lArc.P;
      disappearing.unshift(lArc);
      d3_geom_voronoiDetachBeach(lArc);
      lArc = previous;
    }
    disappearing.unshift(lArc);
    d3_geom_voronoiDetachCircle(lArc);
    var rArc = next;
    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
      next = rArc.N;
      disappearing.push(rArc);
      d3_geom_voronoiDetachBeach(rArc);
      rArc = next;
    }
    disappearing.push(rArc);
    d3_geom_voronoiDetachCircle(rArc);
    var nArcs = disappearing.length, iArc;
    for (iArc = 1; iArc < nArcs; ++iArc) {
      rArc = disappearing[iArc];
      lArc = disappearing[iArc - 1];
      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
    }
    lArc = disappearing[0];
    rArc = disappearing[nArcs - 1];
    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiAddBeach(site) {
    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
    while (node) {
      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
      if (dxl > ε) node = node.L; else {
        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
        if (dxr > ε) {
          if (!node.R) {
            lArc = node;
            break;
          }
          node = node.R;
        } else {
          if (dxl > -ε) {
            lArc = node.P;
            rArc = node;
          } else if (dxr > -ε) {
            lArc = node;
            rArc = node.N;
          } else {
            lArc = rArc = node;
          }
          break;
        }
      }
    }
    var newArc = d3_geom_voronoiCreateBeach(site);
    d3_geom_voronoiBeaches.insert(lArc, newArc);
    if (!lArc && !rArc) return;
    if (lArc === rArc) {
      d3_geom_voronoiDetachCircle(lArc);
      rArc = d3_geom_voronoiCreateBeach(lArc.site);
      d3_geom_voronoiBeaches.insert(newArc, rArc);
      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      d3_geom_voronoiAttachCircle(lArc);
      d3_geom_voronoiAttachCircle(rArc);
      return;
    }
    if (!rArc) {
      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      return;
    }
    d3_geom_voronoiDetachCircle(lArc);
    d3_geom_voronoiDetachCircle(rArc);
    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
      x: (cy * hb - by * hc) / d + ax,
      y: (bx * hc - cx * hb) / d + ay
    };
    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
    if (!pby2) return rfocx;
    var lArc = arc.P;
    if (!lArc) return -Infinity;
    site = lArc.site;
    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
    if (!plby2) return lfocx;
    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
    return (rfocx + lfocx) / 2;
  }
  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
    var rArc = arc.N;
    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
    var site = arc.site;
    return site.y === directrix ? site.x : Infinity;
  }
  function d3_geom_voronoiCell(site) {
    this.site = site;
    this.edges = [];
  }
  d3_geom_voronoiCell.prototype.prepare = function() {
    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
    while (iHalfEdge--) {
      edge = halfEdges[iHalfEdge].edge;
      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
    }
    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
    return halfEdges.length;
  };
  function d3_geom_voronoiCloseCells(extent) {
    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
    while (iCell--) {
      cell = cells[iCell];
      if (!cell || !cell.prepare()) continue;
      halfEdges = cell.edges;
      nHalfEdges = halfEdges.length;
      iHalfEdge = 0;
      while (iHalfEdge < nHalfEdges) {
        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
            x: x0,
            y: abs(x2 - x0) < ε ? y2 : y1
          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
            x: abs(y2 - y1) < ε ? x2 : x1,
            y: y1
          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
            x: x1,
            y: abs(x2 - x1) < ε ? y2 : y0
          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
            x: abs(y2 - y0) < ε ? x2 : x0,
            y: y0
          } : null), cell.site, null));
          ++nHalfEdges;
        }
      }
    }
  }
  function d3_geom_voronoiHalfEdgeOrder(a, b) {
    return b.angle - a.angle;
  }
  function d3_geom_voronoiCircle() {
    d3_geom_voronoiRedBlackNode(this);
    this.x = this.y = this.arc = this.site = this.cy = null;
  }
  function d3_geom_voronoiAttachCircle(arc) {
    var lArc = arc.P, rArc = arc.N;
    if (!lArc || !rArc) return;
    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
    if (lSite === rSite) return;
    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
    var d = 2 * (ax * cy - ay * cx);
    if (d >= -ε2) return;
    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
    circle.arc = arc;
    circle.site = cSite;
    circle.x = x + bx;
    circle.y = cy + Math.sqrt(x * x + y * y);
    circle.cy = cy;
    arc.circle = circle;
    var before = null, node = d3_geom_voronoiCircles._;
    while (node) {
      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
        if (node.L) node = node.L; else {
          before = node.P;
          break;
        }
      } else {
        if (node.R) node = node.R; else {
          before = node;
          break;
        }
      }
    }
    d3_geom_voronoiCircles.insert(before, circle);
    if (!before) d3_geom_voronoiFirstCircle = circle;
  }
  function d3_geom_voronoiDetachCircle(arc) {
    var circle = arc.circle;
    if (circle) {
      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
      d3_geom_voronoiCircles.remove(circle);
      d3_geom_voronoiCirclePool.push(circle);
      d3_geom_voronoiRedBlackNode(circle);
      arc.circle = null;
    }
  }
  function d3_geom_voronoiClipEdges(extent) {
    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
    while (i--) {
      e = edges[i];
      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
        e.a = e.b = null;
        edges.splice(i, 1);
      }
    }
  }
  function d3_geom_voronoiConnectEdge(edge, extent) {
    var vb = edge.b;
    if (vb) return true;
    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
    if (ry === ly) {
      if (fx < x0 || fx >= x1) return;
      if (lx > rx) {
        if (!va) va = {
          x: fx,
          y: y0
        }; else if (va.y >= y1) return;
        vb = {
          x: fx,
          y: y1
        };
      } else {
        if (!va) va = {
          x: fx,
          y: y1
        }; else if (va.y < y0) return;
        vb = {
          x: fx,
          y: y0
        };
      }
    } else {
      fm = (lx - rx) / (ry - ly);
      fb = fy - fm * fx;
      if (fm < -1 || fm > 1) {
        if (lx > rx) {
          if (!va) va = {
            x: (y0 - fb) / fm,
            y: y0
          }; else if (va.y >= y1) return;
          vb = {
            x: (y1 - fb) / fm,
            y: y1
          };
        } else {
          if (!va) va = {
            x: (y1 - fb) / fm,
            y: y1
          }; else if (va.y < y0) return;
          vb = {
            x: (y0 - fb) / fm,
            y: y0
          };
        }
      } else {
        if (ly < ry) {
          if (!va) va = {
            x: x0,
            y: fm * x0 + fb
          }; else if (va.x >= x1) return;
          vb = {
            x: x1,
            y: fm * x1 + fb
          };
        } else {
          if (!va) va = {
            x: x1,
            y: fm * x1 + fb
          }; else if (va.x < x0) return;
          vb = {
            x: x0,
            y: fm * x0 + fb
          };
        }
      }
    }
    edge.a = va;
    edge.b = vb;
    return true;
  }
  function d3_geom_voronoiEdge(lSite, rSite) {
    this.l = lSite;
    this.r = rSite;
    this.a = this.b = null;
  }
  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, rSite);
    d3_geom_voronoiEdges.push(edge);
    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
    return edge;
  }
  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, null);
    edge.a = va;
    edge.b = vb;
    d3_geom_voronoiEdges.push(edge);
    return edge;
  }
  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
    if (!edge.a && !edge.b) {
      edge.a = vertex;
      edge.l = lSite;
      edge.r = rSite;
    } else if (edge.l === rSite) {
      edge.b = vertex;
    } else {
      edge.a = vertex;
    }
  }
  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
    var va = edge.a, vb = edge.b;
    this.edge = edge;
    this.site = lSite;
    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
  }
  d3_geom_voronoiHalfEdge.prototype = {
    start: function() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b;
    },
    end: function() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a;
    }
  };
  function d3_geom_voronoiRedBlackTree() {
    this._ = null;
  }
  function d3_geom_voronoiRedBlackNode(node) {
    node.U = node.C = node.L = node.R = node.P = node.N = null;
  }
  d3_geom_voronoiRedBlackTree.prototype = {
    insert: function(after, node) {
      var parent, grandpa, uncle;
      if (after) {
        node.P = after;
        node.N = after.N;
        if (after.N) after.N.P = node;
        after.N = node;
        if (after.R) {
          after = after.R;
          while (after.L) after = after.L;
          after.L = node;
        } else {
          after.R = node;
        }
        parent = after;
      } else if (this._) {
        after = d3_geom_voronoiRedBlackFirst(this._);
        node.P = null;
        node.N = after;
        after.P = after.L = node;
        parent = after;
      } else {
        node.P = node.N = null;
        this._ = node;
        parent = null;
      }
      node.L = node.R = null;
      node.U = parent;
      node.C = true;
      after = node;
      while (parent && parent.C) {
        grandpa = parent.U;
        if (parent === grandpa.L) {
          uncle = grandpa.R;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.R) {
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
          }
        } else {
          uncle = grandpa.L;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.L) {
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
          }
        }
        parent = after.U;
      }
      this._.C = false;
    },
    remove: function(node) {
      if (node.N) node.N.P = node.P;
      if (node.P) node.P.N = node.N;
      node.N = node.P = null;
      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
      if (parent) {
        if (parent.L === node) parent.L = next; else parent.R = next;
      } else {
        this._ = next;
      }
      if (left && right) {
        red = next.C;
        next.C = node.C;
        next.L = left;
        left.U = next;
        if (next !== right) {
          parent = next.U;
          next.U = node.U;
          node = next.R;
          parent.L = node;
          next.R = right;
          right.U = next;
        } else {
          next.U = parent;
          parent = next;
          node = next.R;
        }
      } else {
        red = node.C;
        node = next;
      }
      if (node) node.U = parent;
      if (red) return;
      if (node && node.C) {
        node.C = false;
        return;
      }
      do {
        if (node === this._) break;
        if (node === parent.L) {
          sibling = parent.R;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            sibling = parent.R;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.R || !sibling.R.C) {
              sibling.L.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateRight(this, sibling);
              sibling = parent.R;
            }
            sibling.C = parent.C;
            parent.C = sibling.R.C = false;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            node = this._;
            break;
          }
        } else {
          sibling = parent.L;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            sibling = parent.L;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.L || !sibling.L.C) {
              sibling.R.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
              sibling = parent.L;
            }
            sibling.C = parent.C;
            parent.C = sibling.L.C = false;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            node = this._;
            break;
          }
        }
        sibling.C = true;
        node = parent;
        parent = parent.U;
      } while (!node.C);
      if (node) node.C = false;
    }
  };
  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
    var p = node, q = node.R, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.R = q.L;
    if (p.R) p.R.U = p;
    q.L = p;
  }
  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
    var p = node, q = node.L, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.L = q.R;
    if (p.L) p.L.U = p;
    q.R = p;
  }
  function d3_geom_voronoiRedBlackFirst(node) {
    while (node.L) node = node.L;
    return node;
  }
  function d3_geom_voronoi(sites, bbox) {
    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
    d3_geom_voronoiEdges = [];
    d3_geom_voronoiCells = new Array(sites.length);
    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
    while (true) {
      circle = d3_geom_voronoiFirstCircle;
      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
        if (site.x !== x0 || site.y !== y0) {
          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
          d3_geom_voronoiAddBeach(site);
          x0 = site.x, y0 = site.y;
        }
        site = sites.pop();
      } else if (circle) {
        d3_geom_voronoiRemoveBeach(circle.arc);
      } else {
        break;
      }
    }
    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
    var diagram = {
      cells: d3_geom_voronoiCells,
      edges: d3_geom_voronoiEdges
    };
    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
    return diagram;
  }
  function d3_geom_voronoiVertexOrder(a, b) {
    return b.y - a.y || b.x - a.x;
  }
  d3.geom.voronoi = function(points) {
    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
    if (points) return voronoi(points);
    function voronoi(data) {
      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
          var s = e.start();
          return [ s.x, s.y ];
        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
        polygon.point = data[i];
      });
      return polygons;
    }
    function sites(data) {
      return data.map(function(d, i) {
        return {
          x: Math.round(fx(d, i) / ε) * ε,
          y: Math.round(fy(d, i) / ε) * ε,
          i: i
        };
      });
    }
    voronoi.links = function(data) {
      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
        return edge.l && edge.r;
      }).map(function(edge) {
        return {
          source: data[edge.l.i],
          target: data[edge.r.i]
        };
      });
    };
    voronoi.triangles = function(data) {
      var triangles = [];
      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
        while (++j < m) {
          e0 = e1;
          s0 = s1;
          e1 = edges[j].edge;
          s1 = e1.l === site ? e1.r : e1.l;
          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
          }
        }
      });
      return triangles;
    };
    voronoi.x = function(_) {
      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
    };
    voronoi.y = function(_) {
      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
    };
    voronoi.clipExtent = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
      return voronoi;
    };
    voronoi.size = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
    };
    return voronoi;
  };
  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
  function d3_geom_voronoiTriangleArea(a, b, c) {
    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
  }
  d3.geom.delaunay = function(vertices) {
    return d3.geom.voronoi().triangles(vertices);
  };
  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
    if (compat = arguments.length) {
      x = d3_geom_quadtreeCompatX;
      y = d3_geom_quadtreeCompatY;
      if (compat === 3) {
        y2 = y1;
        x2 = x1;
        y1 = x1 = 0;
      }
      return quadtree(points);
    }
    function quadtree(data) {
      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
      if (x1 != null) {
        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
      } else {
        x2_ = y2_ = -(x1_ = y1_ = Infinity);
        xs = [], ys = [];
        n = data.length;
        if (compat) for (i = 0; i < n; ++i) {
          d = data[i];
          if (d.x < x1_) x1_ = d.x;
          if (d.y < y1_) y1_ = d.y;
          if (d.x > x2_) x2_ = d.x;
          if (d.y > y2_) y2_ = d.y;
          xs.push(d.x);
          ys.push(d.y);
        } else for (i = 0; i < n; ++i) {
          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
          if (x_ < x1_) x1_ = x_;
          if (y_ < y1_) y1_ = y_;
          if (x_ > x2_) x2_ = x_;
          if (y_ > y2_) y2_ = y_;
          xs.push(x_);
          ys.push(y_);
        }
      }
      var dx = x2_ - x1_, dy = y2_ - y1_;
      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
      function insert(n, d, x, y, x1, y1, x2, y2) {
        if (isNaN(x) || isNaN(y)) return;
        if (n.leaf) {
          var nx = n.x, ny = n.y;
          if (nx != null) {
            if (abs(nx - x) + abs(ny - y) < .01) {
              insertChild(n, d, x, y, x1, y1, x2, y2);
            } else {
              var nPoint = n.point;
              n.x = n.y = n.point = null;
              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
              insertChild(n, d, x, y, x1, y1, x2, y2);
            }
          } else {
            n.x = x, n.y = y, n.point = d;
          }
        } else {
          insertChild(n, d, x, y, x1, y1, x2, y2);
        }
      }
      function insertChild(n, d, x, y, x1, y1, x2, y2) {
        var xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym, i = below << 1 | right;
        n.leaf = false;
        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
        if (right) x1 = xm; else x2 = xm;
        if (below) y1 = ym; else y2 = ym;
        insert(n, d, x, y, x1, y1, x2, y2);
      }
      var root = d3_geom_quadtreeNode();
      root.add = function(d) {
        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
      };
      root.visit = function(f) {
        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
      };
      root.find = function(point) {
        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
      };
      i = -1;
      if (x1 == null) {
        while (++i < n) {
          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
        }
        --i;
      } else data.forEach(root.add);
      xs = ys = data = d = null;
      return root;
    }
    quadtree.x = function(_) {
      return arguments.length ? (x = _, quadtree) : x;
    };
    quadtree.y = function(_) {
      return arguments.length ? (y = _, quadtree) : y;
    };
    quadtree.extent = function(_) {
      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
      y2 = +_[1][1];
      return quadtree;
    };
    quadtree.size = function(_) {
      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
      return quadtree;
    };
    return quadtree;
  };
  function d3_geom_quadtreeCompatX(d) {
    return d.x;
  }
  function d3_geom_quadtreeCompatY(d) {
    return d.y;
  }
  function d3_geom_quadtreeNode() {
    return {
      leaf: true,
      nodes: [],
      point: null,
      x: null,
      y: null
    };
  }
  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
    if (!f(node, x1, y1, x2, y2)) {
      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
    }
  }
  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
    var minDistance2 = Infinity, closestPoint;
    (function find(node, x1, y1, x2, y2) {
      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
      if (point = node.point) {
        var point, dx = x - point[0], dy = y - point[1], distance2 = dx * dx + dy * dy;
        if (distance2 < minDistance2) {
          var distance = Math.sqrt(minDistance2 = distance2);
          x0 = x - distance, y0 = y - distance;
          x3 = x + distance, y3 = y + distance;
          closestPoint = point;
        }
      }
      var children = node.nodes, xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym;
      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
        if (node = children[i & 3]) switch (i & 3) {
         case 0:
          find(node, x1, y1, xm, ym);
          break;

         case 1:
          find(node, xm, y1, x2, ym);
          break;

         case 2:
          find(node, x1, ym, xm, y2);
          break;

         case 3:
          find(node, xm, ym, x2, y2);
          break;
        }
      }
    })(root, x0, y0, x3, y3);
    return closestPoint;
  }
  d3.interpolateRgb = d3_interpolateRgb;
  function d3_interpolateRgb(a, b) {
    a = d3.rgb(a);
    b = d3.rgb(b);
    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
    return function(t) {
      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
    };
  }
  d3.interpolateObject = d3_interpolateObject;
  function d3_interpolateObject(a, b) {
    var i = {}, c = {}, k;
    for (k in a) {
      if (k in b) {
        i[k] = d3_interpolate(a[k], b[k]);
      } else {
        c[k] = a[k];
      }
    }
    for (k in b) {
      if (!(k in a)) {
        c[k] = b[k];
      }
    }
    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }
  d3.interpolateNumber = d3_interpolateNumber;
  function d3_interpolateNumber(a, b) {
    a = +a, b = +b;
    return function(t) {
      return a * (1 - t) + b * t;
    };
  }
  d3.interpolateString = d3_interpolateString;
  function d3_interpolateString(a, b) {
    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
    a = a + "", b = b + "";
    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s[i]) s[i] += bm; else s[++i] = bm;
      } else {
        s[++i] = null;
        q.push({
          i: i,
          x: d3_interpolateNumber(am, bm)
        });
      }
      bi = d3_interpolate_numberB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; else s[++i] = bs;
    }
    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
      return b(t) + "";
    }) : function() {
      return b;
    } : (b = q.length, function(t) {
      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    });
  }
  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
  d3.interpolate = d3_interpolate;
  function d3_interpolate(a, b) {
    var i = d3.interpolators.length, f;
    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
    return f;
  }
  d3.interpolators = [ function(a, b) {
    var t = typeof b;
    return (t === "string" ? d3_rgb_names.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
  } ];
  d3.interpolateArray = d3_interpolateArray;
  function d3_interpolateArray(a, b) {
    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
    for (;i < na; ++i) c[i] = a[i];
    for (;i < nb; ++i) c[i] = b[i];
    return function(t) {
      for (i = 0; i < n0; ++i) c[i] = x[i](t);
      return c;
    };
  }
  var d3_ease_default = function() {
    return d3_identity;
  };
  var d3_ease = d3.map({
    linear: d3_ease_default,
    poly: d3_ease_poly,
    quad: function() {
      return d3_ease_quad;
    },
    cubic: function() {
      return d3_ease_cubic;
    },
    sin: function() {
      return d3_ease_sin;
    },
    exp: function() {
      return d3_ease_exp;
    },
    circle: function() {
      return d3_ease_circle;
    },
    elastic: d3_ease_elastic,
    back: d3_ease_back,
    bounce: function() {
      return d3_ease_bounce;
    }
  });
  var d3_ease_mode = d3.map({
    "in": d3_identity,
    out: d3_ease_reverse,
    "in-out": d3_ease_reflect,
    "out-in": function(f) {
      return d3_ease_reflect(d3_ease_reverse(f));
    }
  });
  d3.ease = function(name) {
    var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
    t = d3_ease.get(t) || d3_ease_default;
    m = d3_ease_mode.get(m) || d3_identity;
    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
  };
  function d3_ease_clamp(f) {
    return function(t) {
      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
    };
  }
  function d3_ease_reverse(f) {
    return function(t) {
      return 1 - f(1 - t);
    };
  }
  function d3_ease_reflect(f) {
    return function(t) {
      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
    };
  }
  function d3_ease_quad(t) {
    return t * t;
  }
  function d3_ease_cubic(t) {
    return t * t * t;
  }
  function d3_ease_cubicInOut(t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    var t2 = t * t, t3 = t2 * t;
    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
  }
  function d3_ease_poly(e) {
    return function(t) {
      return Math.pow(t, e);
    };
  }
  function d3_ease_sin(t) {
    return 1 - Math.cos(t * halfπ);
  }
  function d3_ease_exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }
  function d3_ease_circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function d3_ease_elastic(a, p) {
    var s;
    if (arguments.length < 2) p = .45;
    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
    return function(t) {
      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
    };
  }
  function d3_ease_back(s) {
    if (!s) s = 1.70158;
    return function(t) {
      return t * t * ((s + 1) * t - s);
    };
  }
  function d3_ease_bounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }
  d3.interpolateHcl = d3_interpolateHcl;
  function d3_interpolateHcl(a, b) {
    a = d3.hcl(a);
    b = d3.hcl(b);
    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
    };
  }
  d3.interpolateHsl = d3_interpolateHsl;
  function d3_interpolateHsl(a, b) {
    a = d3.hsl(a);
    b = d3.hsl(b);
    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
    };
  }
  d3.interpolateLab = d3_interpolateLab;
  function d3_interpolateLab(a, b) {
    a = d3.lab(a);
    b = d3.lab(b);
    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
    return function(t) {
      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
    };
  }
  d3.interpolateRound = d3_interpolateRound;
  function d3_interpolateRound(a, b) {
    b -= a;
    return function(t) {
      return Math.round(a + b * t);
    };
  }
  d3.transform = function(string) {
    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
    return (d3.transform = function(string) {
      if (string != null) {
        g.setAttribute("transform", string);
        var t = g.transform.baseVal.consolidate();
      }
      return new d3_transform(t ? t.matrix : d3_transformIdentity);
    })(string);
  };
  function d3_transform(m) {
    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
    if (r0[0] * r1[1] < r1[0] * r0[1]) {
      r0[0] *= -1;
      r0[1] *= -1;
      kx *= -1;
      kz *= -1;
    }
    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
    this.translate = [ m.e, m.f ];
    this.scale = [ kx, ky ];
    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
  }
  d3_transform.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  function d3_transformDot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
  function d3_transformNormalize(a) {
    var k = Math.sqrt(d3_transformDot(a, a));
    if (k) {
      a[0] /= k;
      a[1] /= k;
    }
    return k;
  }
  function d3_transformCombine(a, b, k) {
    a[0] += k * b[0];
    a[1] += k * b[1];
    return a;
  }
  var d3_transformIdentity = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  d3.interpolateTransform = d3_interpolateTransform;
  function d3_interpolateTransform(a, b) {
    var s = [], q = [], n, A = d3.transform(a), B = d3.transform(b), ta = A.translate, tb = B.translate, ra = A.rotate, rb = B.rotate, wa = A.skew, wb = B.skew, ka = A.scale, kb = B.scale;
    if (ta[0] != tb[0] || ta[1] != tb[1]) {
      s.push("translate(", null, ",", null, ")");
      q.push({
        i: 1,
        x: d3_interpolateNumber(ta[0], tb[0])
      }, {
        i: 3,
        x: d3_interpolateNumber(ta[1], tb[1])
      });
    } else if (tb[0] || tb[1]) {
      s.push("translate(" + tb + ")");
    } else {
      s.push("");
    }
    if (ra != rb) {
      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
      q.push({
        i: s.push(s.pop() + "rotate(", null, ")") - 2,
        x: d3_interpolateNumber(ra, rb)
      });
    } else if (rb) {
      s.push(s.pop() + "rotate(" + rb + ")");
    }
    if (wa != wb) {
      q.push({
        i: s.push(s.pop() + "skewX(", null, ")") - 2,
        x: d3_interpolateNumber(wa, wb)
      });
    } else if (wb) {
      s.push(s.pop() + "skewX(" + wb + ")");
    }
    if (ka[0] != kb[0] || ka[1] != kb[1]) {
      n = s.push(s.pop() + "scale(", null, ",", null, ")");
      q.push({
        i: n - 4,
        x: d3_interpolateNumber(ka[0], kb[0])
      }, {
        i: n - 2,
        x: d3_interpolateNumber(ka[1], kb[1])
      });
    } else if (kb[0] != 1 || kb[1] != 1) {
      s.push(s.pop() + "scale(" + kb + ")");
    }
    n = q.length;
    return function(t) {
      var i = -1, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  }
  function d3_uninterpolateNumber(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return (x - a) / b;
    };
  }
  function d3_uninterpolateClamp(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return Math.max(0, Math.min(1, (x - a) / b));
    };
  }
  d3.layout = {};
  d3.layout.bundle = function() {
    return function(links) {
      var paths = [], i = -1, n = links.length;
      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
      return paths;
    };
  };
  function d3_layout_bundlePath(link) {
    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
    while (start !== lca) {
      start = start.parent;
      points.push(start);
    }
    var k = points.length;
    while (end !== lca) {
      points.splice(k, 0, end);
      end = end.parent;
    }
    return points;
  }
  function d3_layout_bundleAncestors(node) {
    var ancestors = [], parent = node.parent;
    while (parent != null) {
      ancestors.push(node);
      node = parent;
      parent = parent.parent;
    }
    ancestors.push(node);
    return ancestors;
  }
  function d3_layout_bundleLeastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
    while (aNode === bNode) {
      sharedNode = aNode;
      aNode = aNodes.pop();
      bNode = bNodes.pop();
    }
    return sharedNode;
  }
  d3.layout.chord = function() {
    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
    function relayout() {
      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
      chords = [];
      groups = [];
      k = 0, i = -1;
      while (++i < n) {
        x = 0, j = -1;
        while (++j < n) {
          x += matrix[i][j];
        }
        groupSums.push(x);
        subgroupIndex.push(d3.range(n));
        k += x;
      }
      if (sortGroups) {
        groupIndex.sort(function(a, b) {
          return sortGroups(groupSums[a], groupSums[b]);
        });
      }
      if (sortSubgroups) {
        subgroupIndex.forEach(function(d, i) {
          d.sort(function(a, b) {
            return sortSubgroups(matrix[i][a], matrix[i][b]);
          });
        });
      }
      k = (τ - padding * n) / k;
      x = 0, i = -1;
      while (++i < n) {
        x0 = x, j = -1;
        while (++j < n) {
          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
          subgroups[di + "-" + dj] = {
            index: di,
            subindex: dj,
            startAngle: a0,
            endAngle: a1,
            value: v
          };
        }
        groups[di] = {
          index: di,
          startAngle: x0,
          endAngle: x,
          value: (x - x0) / k
        };
        x += padding;
      }
      i = -1;
      while (++i < n) {
        j = i - 1;
        while (++j < n) {
          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
          if (source.value || target.value) {
            chords.push(source.value < target.value ? {
              source: target,
              target: source
            } : {
              source: source,
              target: target
            });
          }
        }
      }
      if (sortChords) resort();
    }
    function resort() {
      chords.sort(function(a, b) {
        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
      });
    }
    chord.matrix = function(x) {
      if (!arguments.length) return matrix;
      n = (matrix = x) && matrix.length;
      chords = groups = null;
      return chord;
    };
    chord.padding = function(x) {
      if (!arguments.length) return padding;
      padding = x;
      chords = groups = null;
      return chord;
    };
    chord.sortGroups = function(x) {
      if (!arguments.length) return sortGroups;
      sortGroups = x;
      chords = groups = null;
      return chord;
    };
    chord.sortSubgroups = function(x) {
      if (!arguments.length) return sortSubgroups;
      sortSubgroups = x;
      chords = null;
      return chord;
    };
    chord.sortChords = function(x) {
      if (!arguments.length) return sortChords;
      sortChords = x;
      if (chords) resort();
      return chord;
    };
    chord.chords = function() {
      if (!chords) relayout();
      return chords;
    };
    chord.groups = function() {
      if (!groups) relayout();
      return groups;
    };
    return chord;
  };
  d3.layout.force = function() {
    var force = {}, event = d3.dispatch("start", "tick", "end"), size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
    function repulse(node) {
      return function(quad, x1, _, x2) {
        if (quad.point !== node) {
          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
          if (dw * dw / theta2 < dn) {
            if (dn < chargeDistance2) {
              var k = quad.charge / dn;
              node.px -= dx * k;
              node.py -= dy * k;
            }
            return true;
          }
          if (quad.point && dn && dn < chargeDistance2) {
            var k = quad.pointCharge / dn;
            node.px -= dx * k;
            node.py -= dy * k;
          }
        }
        return !quad.charge;
      };
    }
    force.tick = function() {
      if ((alpha *= .99) < .005) {
        event.end({
          type: "end",
          alpha: alpha = 0
        });
        return true;
      }
      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
      for (i = 0; i < m; ++i) {
        o = links[i];
        s = o.source;
        t = o.target;
        x = t.x - s.x;
        y = t.y - s.y;
        if (l = x * x + y * y) {
          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
          x *= l;
          y *= l;
          t.x -= x * (k = s.weight / (t.weight + s.weight));
          t.y -= y * k;
          s.x += x * (k = 1 - k);
          s.y += y * k;
        }
      }
      if (k = alpha * gravity) {
        x = size[0] / 2;
        y = size[1] / 2;
        i = -1;
        if (k) while (++i < n) {
          o = nodes[i];
          o.x += (x - o.x) * k;
          o.y += (y - o.y) * k;
        }
      }
      if (charge) {
        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
        i = -1;
        while (++i < n) {
          if (!(o = nodes[i]).fixed) {
            q.visit(repulse(o));
          }
        }
      }
      i = -1;
      while (++i < n) {
        o = nodes[i];
        if (o.fixed) {
          o.x = o.px;
          o.y = o.py;
        } else {
          o.x -= (o.px - (o.px = o.x)) * friction;
          o.y -= (o.py - (o.py = o.y)) * friction;
        }
      }
      event.tick({
        type: "tick",
        alpha: alpha
      });
    };
    force.nodes = function(x) {
      if (!arguments.length) return nodes;
      nodes = x;
      return force;
    };
    force.links = function(x) {
      if (!arguments.length) return links;
      links = x;
      return force;
    };
    force.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return force;
    };
    force.linkDistance = function(x) {
      if (!arguments.length) return linkDistance;
      linkDistance = typeof x === "function" ? x : +x;
      return force;
    };
    force.distance = force.linkDistance;
    force.linkStrength = function(x) {
      if (!arguments.length) return linkStrength;
      linkStrength = typeof x === "function" ? x : +x;
      return force;
    };
    force.friction = function(x) {
      if (!arguments.length) return friction;
      friction = +x;
      return force;
    };
    force.charge = function(x) {
      if (!arguments.length) return charge;
      charge = typeof x === "function" ? x : +x;
      return force;
    };
    force.chargeDistance = function(x) {
      if (!arguments.length) return Math.sqrt(chargeDistance2);
      chargeDistance2 = x * x;
      return force;
    };
    force.gravity = function(x) {
      if (!arguments.length) return gravity;
      gravity = +x;
      return force;
    };
    force.theta = function(x) {
      if (!arguments.length) return Math.sqrt(theta2);
      theta2 = x * x;
      return force;
    };
    force.alpha = function(x) {
      if (!arguments.length) return alpha;
      x = +x;
      if (alpha) {
        if (x > 0) alpha = x; else alpha = 0;
      } else if (x > 0) {
        event.start({
          type: "start",
          alpha: alpha = x
        });
        d3.timer(force.tick);
      }
      return force;
    };
    force.start = function() {
      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
      for (i = 0; i < n; ++i) {
        (o = nodes[i]).index = i;
        o.weight = 0;
      }
      for (i = 0; i < m; ++i) {
        o = links[i];
        if (typeof o.source == "number") o.source = nodes[o.source];
        if (typeof o.target == "number") o.target = nodes[o.target];
        ++o.source.weight;
        ++o.target.weight;
      }
      for (i = 0; i < n; ++i) {
        o = nodes[i];
        if (isNaN(o.x)) o.x = position("x", w);
        if (isNaN(o.y)) o.y = position("y", h);
        if (isNaN(o.px)) o.px = o.x;
        if (isNaN(o.py)) o.py = o.y;
      }
      distances = [];
      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
      strengths = [];
      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
      charges = [];
      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
      function position(dimension, size) {
        if (!neighbors) {
          neighbors = new Array(n);
          for (j = 0; j < n; ++j) {
            neighbors[j] = [];
          }
          for (j = 0; j < m; ++j) {
            var o = links[j];
            neighbors[o.source.index].push(o.target);
            neighbors[o.target.index].push(o.source);
          }
        }
        var candidates = neighbors[i], j = -1, m = candidates.length, x;
        while (++j < m) if (!isNaN(x = candidates[j][dimension])) return x;
        return Math.random() * size;
      }
      return force.resume();
    };
    force.resume = function() {
      return force.alpha(.1);
    };
    force.stop = function() {
      return force.alpha(0);
    };
    force.drag = function() {
      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
      if (!arguments.length) return drag;
      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
    };
    function dragmove(d) {
      d.px = d3.event.x, d.py = d3.event.y;
      force.resume();
    }
    return d3.rebind(force, event, "on");
  };
  function d3_layout_forceDragstart(d) {
    d.fixed |= 2;
  }
  function d3_layout_forceDragend(d) {
    d.fixed &= ~6;
  }
  function d3_layout_forceMouseover(d) {
    d.fixed |= 4;
    d.px = d.x, d.py = d.y;
  }
  function d3_layout_forceMouseout(d) {
    d.fixed &= ~4;
  }
  function d3_layout_forceAccumulate(quad, alpha, charges) {
    var cx = 0, cy = 0;
    quad.charge = 0;
    if (!quad.leaf) {
      var nodes = quad.nodes, n = nodes.length, i = -1, c;
      while (++i < n) {
        c = nodes[i];
        if (c == null) continue;
        d3_layout_forceAccumulate(c, alpha, charges);
        quad.charge += c.charge;
        cx += c.charge * c.cx;
        cy += c.charge * c.cy;
      }
    }
    if (quad.point) {
      if (!quad.leaf) {
        quad.point.x += Math.random() - .5;
        quad.point.y += Math.random() - .5;
      }
      var k = alpha * charges[quad.point.index];
      quad.charge += quad.pointCharge = k;
      cx += k * quad.point.x;
      cy += k * quad.point.y;
    }
    quad.cx = cx / quad.charge;
    quad.cy = cy / quad.charge;
  }
  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
  d3.layout.hierarchy = function() {
    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
    function hierarchy(root) {
      var stack = [ root ], nodes = [], node;
      root.depth = 0;
      while ((node = stack.pop()) != null) {
        nodes.push(node);
        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
          var n, childs, child;
          while (--n >= 0) {
            stack.push(child = childs[n]);
            child.parent = node;
            child.depth = node.depth + 1;
          }
          if (value) node.value = 0;
          node.children = childs;
        } else {
          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
          delete node.children;
        }
      }
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var childs, parent;
        if (sort && (childs = node.children)) childs.sort(sort);
        if (value && (parent = node.parent)) parent.value += node.value;
      });
      return nodes;
    }
    hierarchy.sort = function(x) {
      if (!arguments.length) return sort;
      sort = x;
      return hierarchy;
    };
    hierarchy.children = function(x) {
      if (!arguments.length) return children;
      children = x;
      return hierarchy;
    };
    hierarchy.value = function(x) {
      if (!arguments.length) return value;
      value = x;
      return hierarchy;
    };
    hierarchy.revalue = function(root) {
      if (value) {
        d3_layout_hierarchyVisitBefore(root, function(node) {
          if (node.children) node.value = 0;
        });
        d3_layout_hierarchyVisitAfter(root, function(node) {
          var parent;
          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
          if (parent = node.parent) parent.value += node.value;
        });
      }
      return root;
    };
    return hierarchy;
  };
  function d3_layout_hierarchyRebind(object, hierarchy) {
    d3.rebind(object, hierarchy, "sort", "children", "value");
    object.nodes = object;
    object.links = d3_layout_hierarchyLinks;
    return object;
  }
  function d3_layout_hierarchyVisitBefore(node, callback) {
    var nodes = [ node ];
    while ((node = nodes.pop()) != null) {
      callback(node);
      if ((children = node.children) && (n = children.length)) {
        var n, children;
        while (--n >= 0) nodes.push(children[n]);
      }
    }
  }
  function d3_layout_hierarchyVisitAfter(node, callback) {
    var nodes = [ node ], nodes2 = [];
    while ((node = nodes.pop()) != null) {
      nodes2.push(node);
      if ((children = node.children) && (n = children.length)) {
        var i = -1, n, children;
        while (++i < n) nodes.push(children[i]);
      }
    }
    while ((node = nodes2.pop()) != null) {
      callback(node);
    }
  }
  function d3_layout_hierarchyChildren(d) {
    return d.children;
  }
  function d3_layout_hierarchyValue(d) {
    return d.value;
  }
  function d3_layout_hierarchySort(a, b) {
    return b.value - a.value;
  }
  function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function(parent) {
      return (parent.children || []).map(function(child) {
        return {
          source: parent,
          target: child
        };
      });
    }));
  }
  d3.layout.partition = function() {
    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
    function position(node, x, dx, dy) {
      var children = node.children;
      node.x = x;
      node.y = node.depth * dy;
      node.dx = dx;
      node.dy = dy;
      if (children && (n = children.length)) {
        var i = -1, n, c, d;
        dx = node.value ? dx / node.value : 0;
        while (++i < n) {
          position(c = children[i], x, d = c.value * dx, dy);
          x += d;
        }
      }
    }
    function depth(node) {
      var children = node.children, d = 0;
      if (children && (n = children.length)) {
        var i = -1, n;
        while (++i < n) d = Math.max(d, depth(children[i]));
      }
      return 1 + d;
    }
    function partition(d, i) {
      var nodes = hierarchy.call(this, d, i);
      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
      return nodes;
    }
    partition.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return partition;
    };
    return d3_layout_hierarchyRebind(partition, hierarchy);
  };
  d3.layout.pie = function() {
    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
    function pie(data) {
      var n = data.length, values = data.map(function(d, i) {
        return +value.call(pie, d, i);
      }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), k = (da - n * pa) / d3.sum(values), index = d3.range(n), arcs = [], v;
      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
        return values[j] - values[i];
      } : function(i, j) {
        return sort(data[i], data[j]);
      });
      index.forEach(function(i) {
        arcs[i] = {
          data: data[i],
          value: v = values[i],
          startAngle: a,
          endAngle: a += v * k + pa,
          padAngle: p
        };
      });
      return arcs;
    }
    pie.value = function(_) {
      if (!arguments.length) return value;
      value = _;
      return pie;
    };
    pie.sort = function(_) {
      if (!arguments.length) return sort;
      sort = _;
      return pie;
    };
    pie.startAngle = function(_) {
      if (!arguments.length) return startAngle;
      startAngle = _;
      return pie;
    };
    pie.endAngle = function(_) {
      if (!arguments.length) return endAngle;
      endAngle = _;
      return pie;
    };
    pie.padAngle = function(_) {
      if (!arguments.length) return padAngle;
      padAngle = _;
      return pie;
    };
    return pie;
  };
  var d3_layout_pieSortByValue = {};
  d3.layout.stack = function() {
    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
    function stack(data, index) {
      if (!(n = data.length)) return data;
      var series = data.map(function(d, i) {
        return values.call(stack, d, i);
      });
      var points = series.map(function(d) {
        return d.map(function(v, i) {
          return [ x.call(stack, v, i), y.call(stack, v, i) ];
        });
      });
      var orders = order.call(stack, points, index);
      series = d3.permute(series, orders);
      points = d3.permute(points, orders);
      var offsets = offset.call(stack, points, index);
      var m = series[0].length, n, i, j, o;
      for (j = 0; j < m; ++j) {
        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
        for (i = 1; i < n; ++i) {
          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
        }
      }
      return data;
    }
    stack.values = function(x) {
      if (!arguments.length) return values;
      values = x;
      return stack;
    };
    stack.order = function(x) {
      if (!arguments.length) return order;
      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
      return stack;
    };
    stack.offset = function(x) {
      if (!arguments.length) return offset;
      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
      return stack;
    };
    stack.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      return stack;
    };
    stack.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      return stack;
    };
    stack.out = function(z) {
      if (!arguments.length) return out;
      out = z;
      return stack;
    };
    return stack;
  };
  function d3_layout_stackX(d) {
    return d.x;
  }
  function d3_layout_stackY(d) {
    return d.y;
  }
  function d3_layout_stackOut(d, y0, y) {
    d.y0 = y0;
    d.y = y;
  }
  var d3_layout_stackOrders = d3.map({
    "inside-out": function(data) {
      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
        return max[a] - max[b];
      }), top = 0, bottom = 0, tops = [], bottoms = [];
      for (i = 0; i < n; ++i) {
        j = index[i];
        if (top < bottom) {
          top += sums[j];
          tops.push(j);
        } else {
          bottom += sums[j];
          bottoms.push(j);
        }
      }
      return bottoms.reverse().concat(tops);
    },
    reverse: function(data) {
      return d3.range(data.length).reverse();
    },
    "default": d3_layout_stackOrderDefault
  });
  var d3_layout_stackOffsets = d3.map({
    silhouette: function(data) {
      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o > max) max = o;
        sums.push(o);
      }
      for (j = 0; j < m; ++j) {
        y0[j] = (max - sums[j]) / 2;
      }
      return y0;
    },
    wiggle: function(data) {
      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
      y0[0] = o = o0 = 0;
      for (j = 1; j < m; ++j) {
        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
          }
          s2 += s3 * data[i][j][1];
        }
        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
        if (o < o0) o0 = o;
      }
      for (j = 0; j < m; ++j) y0[j] -= o0;
      return y0;
    },
    expand: function(data) {
      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
      }
      for (j = 0; j < m; ++j) y0[j] = 0;
      return y0;
    },
    zero: d3_layout_stackOffsetZero
  });
  function d3_layout_stackOrderDefault(data) {
    return d3.range(data.length);
  }
  function d3_layout_stackOffsetZero(data) {
    var j = -1, m = data[0].length, y0 = [];
    while (++j < m) y0[j] = 0;
    return y0;
  }
  function d3_layout_stackMaxIndex(array) {
    var i = 1, j = 0, v = array[0][1], k, n = array.length;
    for (;i < n; ++i) {
      if ((k = array[i][1]) > v) {
        j = i;
        v = k;
      }
    }
    return j;
  }
  function d3_layout_stackReduceSum(d) {
    return d.reduce(d3_layout_stackSum, 0);
  }
  function d3_layout_stackSum(p, d) {
    return p + d[1];
  }
  d3.layout.histogram = function() {
    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
    function histogram(data, i) {
      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
      while (++i < m) {
        bin = bins[i] = [];
        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
        bin.y = 0;
      }
      if (m > 0) {
        i = -1;
        while (++i < n) {
          x = values[i];
          if (x >= range[0] && x <= range[1]) {
            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
            bin.y += k;
            bin.push(data[i]);
          }
        }
      }
      return bins;
    }
    histogram.value = function(x) {
      if (!arguments.length) return valuer;
      valuer = x;
      return histogram;
    };
    histogram.range = function(x) {
      if (!arguments.length) return ranger;
      ranger = d3_functor(x);
      return histogram;
    };
    histogram.bins = function(x) {
      if (!arguments.length) return binner;
      binner = typeof x === "number" ? function(range) {
        return d3_layout_histogramBinFixed(range, x);
      } : d3_functor(x);
      return histogram;
    };
    histogram.frequency = function(x) {
      if (!arguments.length) return frequency;
      frequency = !!x;
      return histogram;
    };
    return histogram;
  };
  function d3_layout_histogramBinSturges(range, values) {
    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
  }
  function d3_layout_histogramBinFixed(range, n) {
    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
    while (++x <= n) f[x] = m * x + b;
    return f;
  }
  function d3_layout_histogramRange(values) {
    return [ d3.min(values), d3.max(values) ];
  }
  d3.layout.pack = function() {
    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
    function pack(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
        return radius;
      };
      root.x = root.y = 0;
      d3_layout_hierarchyVisitAfter(root, function(d) {
        d.r = +r(d.value);
      });
      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
      if (padding) {
        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r += dr;
        });
        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r -= dr;
        });
      }
      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
      return nodes;
    }
    pack.size = function(_) {
      if (!arguments.length) return size;
      size = _;
      return pack;
    };
    pack.radius = function(_) {
      if (!arguments.length) return radius;
      radius = _ == null || typeof _ === "function" ? _ : +_;
      return pack;
    };
    pack.padding = function(_) {
      if (!arguments.length) return padding;
      padding = +_;
      return pack;
    };
    return d3_layout_hierarchyRebind(pack, hierarchy);
  };
  function d3_layout_packSort(a, b) {
    return a.value - b.value;
  }
  function d3_layout_packInsert(a, b) {
    var c = a._pack_next;
    a._pack_next = b;
    b._pack_prev = a;
    b._pack_next = c;
    c._pack_prev = b;
  }
  function d3_layout_packSplice(a, b) {
    a._pack_next = b;
    b._pack_prev = a;
  }
  function d3_layout_packIntersects(a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
    return .999 * dr * dr > dx * dx + dy * dy;
  }
  function d3_layout_packSiblings(node) {
    if (!(nodes = node.children) || !(n = nodes.length)) return;
    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
    function bound(node) {
      xMin = Math.min(node.x - node.r, xMin);
      xMax = Math.max(node.x + node.r, xMax);
      yMin = Math.min(node.y - node.r, yMin);
      yMax = Math.max(node.y + node.r, yMax);
    }
    nodes.forEach(d3_layout_packLink);
    a = nodes[0];
    a.x = -a.r;
    a.y = 0;
    bound(a);
    if (n > 1) {
      b = nodes[1];
      b.x = b.r;
      b.y = 0;
      bound(b);
      if (n > 2) {
        c = nodes[2];
        d3_layout_packPlace(a, b, c);
        bound(c);
        d3_layout_packInsert(a, c);
        a._pack_prev = c;
        d3_layout_packInsert(c, b);
        b = a._pack_next;
        for (i = 3; i < n; i++) {
          d3_layout_packPlace(a, b, c = nodes[i]);
          var isect = 0, s1 = 1, s2 = 1;
          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
            if (d3_layout_packIntersects(j, c)) {
              isect = 1;
              break;
            }
          }
          if (isect == 1) {
            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
              if (d3_layout_packIntersects(k, c)) {
                break;
              }
            }
          }
          if (isect) {
            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
            i--;
          } else {
            d3_layout_packInsert(a, c);
            b = c;
            bound(c);
          }
        }
      }
    }
    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
    for (i = 0; i < n; i++) {
      c = nodes[i];
      c.x -= cx;
      c.y -= cy;
      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
    }
    node.r = cr;
    nodes.forEach(d3_layout_packUnlink);
  }
  function d3_layout_packLink(node) {
    node._pack_next = node._pack_prev = node;
  }
  function d3_layout_packUnlink(node) {
    delete node._pack_next;
    delete node._pack_prev;
  }
  function d3_layout_packTransform(node, x, y, k) {
    var children = node.children;
    node.x = x += k * node.x;
    node.y = y += k * node.y;
    node.r *= k;
    if (children) {
      var i = -1, n = children.length;
      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
    }
  }
  function d3_layout_packPlace(a, b, c) {
    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
    if (db && (dx || dy)) {
      var da = b.r + c.r, dc = dx * dx + dy * dy;
      da *= da;
      db *= db;
      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
      c.x = a.x + x * dx + y * dy;
      c.y = a.y + x * dy - y * dx;
    } else {
      c.x = a.x + db;
      c.y = a.y;
    }
  }
  d3.layout.tree = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
    function tree(d, i) {
      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
      d3_layout_hierarchyVisitBefore(root1, secondWalk);
      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
        var left = root0, right = root0, bottom = root0;
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
          if (node.depth > bottom.depth) bottom = node;
        });
        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          node.x = (node.x + tx) * kx;
          node.y = node.depth * ky;
        });
      }
      return nodes;
    }
    function wrapTree(root0) {
      var root1 = {
        A: null,
        children: [ root0 ]
      }, queue = [ root1 ], node1;
      while ((node1 = queue.pop()) != null) {
        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
          queue.push((children[i] = child = {
            _: children[i],
            parent: node1,
            children: (child = children[i].children) && child.slice() || [],
            A: null,
            a: null,
            z: 0,
            m: 0,
            c: 0,
            s: 0,
            t: null,
            i: i
          }).a = child);
        }
      }
      return root1.children[0];
    }
    function firstWalk(v) {
      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
      if (children.length) {
        d3_layout_treeShift(v);
        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
        if (w) {
          v.z = w.z + separation(v._, w._);
          v.m = v.z - midpoint;
        } else {
          v.z = midpoint;
        }
      } else if (w) {
        v.z = w.z + separation(v._, w._);
      }
      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }
    function secondWalk(v) {
      v._.x = v.z + v.parent.m;
      v.m += v.parent.m;
    }
    function apportion(v, w, ancestor) {
      if (w) {
        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
          vom = d3_layout_treeLeft(vom);
          vop = d3_layout_treeRight(vop);
          vop.a = v;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
          if (shift > 0) {
            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
            sip += shift;
            sop += shift;
          }
          sim += vim.m;
          sip += vip.m;
          som += vom.m;
          sop += vop.m;
        }
        if (vim && !d3_layout_treeRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }
        if (vip && !d3_layout_treeLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          ancestor = v;
        }
      }
      return ancestor;
    }
    function sizeNode(node) {
      node.x *= size[0];
      node.y = node.depth * size[1];
    }
    tree.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return tree;
    };
    tree.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null ? sizeNode : null;
      return tree;
    };
    tree.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) == null ? null : sizeNode;
      return tree;
    };
    return d3_layout_hierarchyRebind(tree, hierarchy);
  };
  function d3_layout_treeSeparation(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }
  function d3_layout_treeLeft(v) {
    var children = v.children;
    return children.length ? children[0] : v.t;
  }
  function d3_layout_treeRight(v) {
    var children = v.children, n;
    return (n = children.length) ? children[n - 1] : v.t;
  }
  function d3_layout_treeMove(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
  }
  function d3_layout_treeShift(v) {
    var shift = 0, change = 0, children = v.children, i = children.length, w;
    while (--i >= 0) {
      w = children[i];
      w.z += shift;
      w.m += shift;
      shift += w.s + (change += w.c);
    }
  }
  function d3_layout_treeAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
  }
  d3.layout.cluster = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
    function cluster(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var children = node.children;
        if (children && children.length) {
          node.x = d3_layout_clusterX(children);
          node.y = d3_layout_clusterY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
        node.x = (node.x - root.x) * size[0];
        node.y = (root.y - node.y) * size[1];
      } : function(node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
      });
      return nodes;
    }
    cluster.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return cluster;
    };
    cluster.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null;
      return cluster;
    };
    cluster.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) != null;
      return cluster;
    };
    return d3_layout_hierarchyRebind(cluster, hierarchy);
  };
  function d3_layout_clusterY(children) {
    return 1 + d3.max(children, function(child) {
      return child.y;
    });
  }
  function d3_layout_clusterX(children) {
    return children.reduce(function(x, child) {
      return x + child.x;
    }, 0) / children.length;
  }
  function d3_layout_clusterLeft(node) {
    var children = node.children;
    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
  }
  function d3_layout_clusterRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
  }
  d3.layout.treemap = function() {
    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
    function scale(children, k) {
      var i = -1, n = children.length, child, area;
      while (++i < n) {
        area = (child = children[i]).value * (k < 0 ? 0 : k);
        child.area = isNaN(area) || area <= 0 ? 0 : area;
      }
    }
    function squarify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while ((n = remaining.length) > 0) {
          row.push(child = remaining[n - 1]);
          row.area += child.area;
          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
            remaining.pop();
            best = score;
          } else {
            row.area -= row.pop().area;
            position(row, u, rect, false);
            u = Math.min(rect.dx, rect.dy);
            row.length = row.area = 0;
            best = Infinity;
          }
        }
        if (row.length) {
          position(row, u, rect, true);
          row.length = row.area = 0;
        }
        children.forEach(squarify);
      }
    }
    function stickify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), remaining = children.slice(), child, row = [];
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while (child = remaining.pop()) {
          row.push(child);
          row.area += child.area;
          if (child.z != null) {
            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
            row.length = row.area = 0;
          }
        }
        children.forEach(stickify);
      }
    }
    function worst(row, u) {
      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
      while (++i < n) {
        if (!(r = row[i].area)) continue;
        if (r < rmin) rmin = r;
        if (r > rmax) rmax = r;
      }
      s *= s;
      u *= u;
      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
    }
    function position(row, u, rect, flush) {
      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
      if (u == rect.dx) {
        if (flush || v > rect.dy) v = rect.dy;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dy = v;
          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
        }
        o.z = true;
        o.dx += rect.x + rect.dx - x;
        rect.y += v;
        rect.dy -= v;
      } else {
        if (flush || v > rect.dx) v = rect.dx;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dx = v;
          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
        }
        o.z = false;
        o.dy += rect.y + rect.dy - y;
        rect.x += v;
        rect.dx -= v;
      }
    }
    function treemap(d) {
      var nodes = stickies || hierarchy(d), root = nodes[0];
      root.x = 0;
      root.y = 0;
      root.dx = size[0];
      root.dy = size[1];
      if (stickies) hierarchy.revalue(root);
      scale([ root ], root.dx * root.dy / root.value);
      (stickies ? stickify : squarify)(root);
      if (sticky) stickies = nodes;
      return nodes;
    }
    treemap.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return treemap;
    };
    treemap.padding = function(x) {
      if (!arguments.length) return padding;
      function padFunction(node) {
        var p = x.call(treemap, node, node.depth);
        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
      }
      function padConstant(node) {
        return d3_layout_treemapPad(node, x);
      }
      var type;
      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
      padConstant) : padConstant;
      return treemap;
    };
    treemap.round = function(x) {
      if (!arguments.length) return round != Number;
      round = x ? Math.round : Number;
      return treemap;
    };
    treemap.sticky = function(x) {
      if (!arguments.length) return sticky;
      sticky = x;
      stickies = null;
      return treemap;
    };
    treemap.ratio = function(x) {
      if (!arguments.length) return ratio;
      ratio = x;
      return treemap;
    };
    treemap.mode = function(x) {
      if (!arguments.length) return mode;
      mode = x + "";
      return treemap;
    };
    return d3_layout_hierarchyRebind(treemap, hierarchy);
  };
  function d3_layout_treemapPadNull(node) {
    return {
      x: node.x,
      y: node.y,
      dx: node.dx,
      dy: node.dy
    };
  }
  function d3_layout_treemapPad(node, padding) {
    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
    if (dx < 0) {
      x += dx / 2;
      dx = 0;
    }
    if (dy < 0) {
      y += dy / 2;
      dy = 0;
    }
    return {
      x: x,
      y: y,
      dx: dx,
      dy: dy
    };
  }
  d3.random = {
    normal: function(µ, σ) {
      var n = arguments.length;
      if (n < 2) σ = 1;
      if (n < 1) µ = 0;
      return function() {
        var x, y, r;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
      };
    },
    logNormal: function() {
      var random = d3.random.normal.apply(d3, arguments);
      return function() {
        return Math.exp(random());
      };
    },
    bates: function(m) {
      var random = d3.random.irwinHall(m);
      return function() {
        return random() / m;
      };
    },
    irwinHall: function(m) {
      return function() {
        for (var s = 0, j = 0; j < m; j++) s += Math.random();
        return s;
      };
    }
  };
  d3.scale = {};
  function d3_scaleExtent(domain) {
    var start = domain[0], stop = domain[domain.length - 1];
    return start < stop ? [ start, stop ] : [ stop, start ];
  }
  function d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
  }
  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
    return function(x) {
      return i(u(x));
    };
  }
  function d3_scale_nice(domain, nice) {
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
    if (x1 < x0) {
      dx = i0, i0 = i1, i1 = dx;
      dx = x0, x0 = x1, x1 = dx;
    }
    domain[i0] = nice.floor(x0);
    domain[i1] = nice.ceil(x1);
    return domain;
  }
  function d3_scale_niceStep(step) {
    return step ? {
      floor: function(x) {
        return Math.floor(x / step) * step;
      },
      ceil: function(x) {
        return Math.ceil(x / step) * step;
      }
    } : d3_scale_niceIdentity;
  }
  var d3_scale_niceIdentity = {
    floor: d3_identity,
    ceil: d3_identity
  };
  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
    if (domain[k] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++j <= k) {
      u.push(uninterpolate(domain[j - 1], domain[j]));
      i.push(interpolate(range[j - 1], range[j]));
    }
    return function(x) {
      var j = d3.bisect(domain, x, 1, k) - 1;
      return i[j](u[j](x));
    };
  }
  d3.scale.linear = function() {
    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
  };
  function d3_scale_linear(domain, range, interpolate, clamp) {
    var output, input;
    function rescale() {
      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
      output = linear(domain, range, uninterpolate, interpolate);
      input = linear(range, domain, uninterpolate, d3_interpolate);
      return scale;
    }
    function scale(x) {
      return output(x);
    }
    scale.invert = function(y) {
      return input(y);
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(Number);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.rangeRound = function(x) {
      return scale.range(x).interpolate(d3_interpolateRound);
    };
    scale.clamp = function(x) {
      if (!arguments.length) return clamp;
      clamp = x;
      return rescale();
    };
    scale.interpolate = function(x) {
      if (!arguments.length) return interpolate;
      interpolate = x;
      return rescale();
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      d3_scale_linearNice(domain, m);
      return rescale();
    };
    scale.copy = function() {
      return d3_scale_linear(domain, range, interpolate, clamp);
    };
    return rescale();
  }
  function d3_scale_linearRebind(scale, linear) {
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }
  function d3_scale_linearNice(domain, m) {
    return d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
  }
  function d3_scale_linearTickRange(domain, m) {
    if (m == null) m = 10;
    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
    extent[0] = Math.ceil(extent[0] / step) * step;
    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
    extent[2] = step;
    return extent;
  }
  function d3_scale_linearTicks(domain, m) {
    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
  }
  function d3_scale_linearTickFormat(domain, m, format) {
    var range = d3_scale_linearTickRange(domain, m);
    if (format) {
      var match = d3_format_re.exec(format);
      match.shift();
      if (match[8] === "s") {
        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
        match[8] = "f";
        format = d3.format(match.join(""));
        return function(d) {
          return format(prefix.scale(d)) + prefix.symbol;
        };
      }
      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
      format = match.join("");
    } else {
      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
    }
    return d3.format(format);
  }
  var d3_scale_linearFormatSignificant = {
    s: 1,
    g: 1,
    p: 1,
    r: 1,
    e: 1
  };
  function d3_scale_linearPrecision(value) {
    return -Math.floor(Math.log(value) / Math.LN10 + .01);
  }
  function d3_scale_linearFormatPrecision(type, range) {
    var p = d3_scale_linearPrecision(range[2]);
    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
  }
  d3.scale.log = function() {
    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
  };
  function d3_scale_log(linear, base, positive, domain) {
    function log(x) {
      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
    }
    function pow(x) {
      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
    }
    function scale(x) {
      return linear(log(x));
    }
    scale.invert = function(x) {
      return pow(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      positive = x[0] >= 0;
      linear.domain((domain = x.map(Number)).map(log));
      return scale;
    };
    scale.base = function(_) {
      if (!arguments.length) return base;
      base = +_;
      linear.domain(domain.map(log));
      return scale;
    };
    scale.nice = function() {
      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
      linear.domain(niced);
      domain = niced.map(pow);
      return scale;
    };
    scale.ticks = function() {
      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
      if (isFinite(j - i)) {
        if (positive) {
          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
          ticks.push(pow(i));
        } else {
          ticks.push(pow(i));
          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
        }
        for (i = 0; ticks[i] < u; i++) {}
        for (j = ticks.length; ticks[j - 1] > v; j--) {}
        ticks = ticks.slice(i, j);
      }
      return ticks;
    };
    scale.tickFormat = function(n, format) {
      if (!arguments.length) return d3_scale_logFormat;
      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
      var k = Math.max(.1, n / scale.ticks().length), f = positive ? (e = 1e-12, Math.ceil) : (e = -1e-12, 
      Math.floor), e;
      return function(d) {
        return d / pow(f(log(d) + e)) <= k ? format(d) : "";
      };
    };
    scale.copy = function() {
      return d3_scale_log(linear.copy(), base, positive, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
    floor: function(x) {
      return -Math.ceil(-x);
    },
    ceil: function(x) {
      return -Math.floor(-x);
    }
  };
  d3.scale.pow = function() {
    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
  };
  function d3_scale_pow(linear, exponent, domain) {
    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
    function scale(x) {
      return linear(powp(x));
    }
    scale.invert = function(x) {
      return powb(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      linear.domain((domain = x.map(Number)).map(powp));
      return scale;
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      return scale.domain(d3_scale_linearNice(domain, m));
    };
    scale.exponent = function(x) {
      if (!arguments.length) return exponent;
      powp = d3_scale_powPow(exponent = x);
      powb = d3_scale_powPow(1 / exponent);
      linear.domain(domain.map(powp));
      return scale;
    };
    scale.copy = function() {
      return d3_scale_pow(linear.copy(), exponent, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_scale_powPow(e) {
    return function(x) {
      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
    };
  }
  d3.scale.sqrt = function() {
    return d3.scale.pow().exponent(.5);
  };
  d3.scale.ordinal = function() {
    return d3_scale_ordinal([], {
      t: "range",
      a: [ [] ]
    });
  };
  function d3_scale_ordinal(domain, ranger) {
    var index, range, rangeBand;
    function scale(x) {
      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
    }
    function steps(start, step) {
      return d3.range(domain.length).map(function(i) {
        return start + step * i;
      });
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = [];
      index = new d3_Map();
      var i = -1, n = x.length, xi;
      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
      return scale[ranger.t].apply(scale, ranger.a);
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      rangeBand = 0;
      ranger = {
        t: "range",
        a: arguments
      };
      return scale;
    };
    scale.rangePoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 
      0) : (stop - start) / (domain.length - 1 + padding);
      range = steps(start + step * padding / 2, step);
      rangeBand = 0;
      ranger = {
        t: "rangePoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundPoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 
      0) : (stop - start) / (domain.length - 1 + padding) | 0;
      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
      rangeBand = 0;
      ranger = {
        t: "rangeRoundPoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
      range = steps(start + step * outerPadding, step);
      if (reverse) range.reverse();
      rangeBand = step * (1 - padding);
      ranger = {
        t: "rangeBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
      if (reverse) range.reverse();
      rangeBand = Math.round(step * (1 - padding));
      ranger = {
        t: "rangeRoundBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeBand = function() {
      return rangeBand;
    };
    scale.rangeExtent = function() {
      return d3_scaleExtent(ranger.a[0]);
    };
    scale.copy = function() {
      return d3_scale_ordinal(domain, ranger);
    };
    return scale.domain(domain);
  }
  d3.scale.category10 = function() {
    return d3.scale.ordinal().range(d3_category10);
  };
  d3.scale.category20 = function() {
    return d3.scale.ordinal().range(d3_category20);
  };
  d3.scale.category20b = function() {
    return d3.scale.ordinal().range(d3_category20b);
  };
  d3.scale.category20c = function() {
    return d3.scale.ordinal().range(d3_category20c);
  };
  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
  d3.scale.quantile = function() {
    return d3_scale_quantile([], []);
  };
  function d3_scale_quantile(domain, range) {
    var thresholds;
    function rescale() {
      var k = 0, q = range.length;
      thresholds = [];
      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
      return scale;
    }
    function scale(x) {
      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.quantiles = function() {
      return thresholds;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
    };
    scale.copy = function() {
      return d3_scale_quantile(domain, range);
    };
    return rescale();
  }
  d3.scale.quantize = function() {
    return d3_scale_quantize(0, 1, [ 0, 1 ]);
  };
  function d3_scale_quantize(x0, x1, range) {
    var kx, i;
    function scale(x) {
      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
    }
    function rescale() {
      kx = range.length / (x1 - x0);
      i = range.length - 1;
      return scale;
    }
    scale.domain = function(x) {
      if (!arguments.length) return [ x0, x1 ];
      x0 = +x[0];
      x1 = +x[x.length - 1];
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      y = y < 0 ? NaN : y / kx + x0;
      return [ y, y + 1 / kx ];
    };
    scale.copy = function() {
      return d3_scale_quantize(x0, x1, range);
    };
    return rescale();
  }
  d3.scale.threshold = function() {
    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
  };
  function d3_scale_threshold(domain, range) {
    function scale(x) {
      if (x <= x) return range[d3.bisect(domain, x)];
    }
    scale.domain = function(_) {
      if (!arguments.length) return domain;
      domain = _;
      return scale;
    };
    scale.range = function(_) {
      if (!arguments.length) return range;
      range = _;
      return scale;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return [ domain[y - 1], domain[y] ];
    };
    scale.copy = function() {
      return d3_scale_threshold(domain, range);
    };
    return scale;
  }
  d3.scale.identity = function() {
    return d3_scale_identity([ 0, 1 ]);
  };
  function d3_scale_identity(domain) {
    function identity(x) {
      return +x;
    }
    identity.invert = identity;
    identity.domain = identity.range = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(identity);
      return identity;
    };
    identity.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    identity.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    identity.copy = function() {
      return d3_scale_identity(domain);
    };
    return identity;
  }
  d3.svg = {};
  function d3_zero() {
    return 0;
  }
  d3.svg.arc = function() {
    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
    function arc() {
      var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
      var rc, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
        if (!cw) p1 *= -1;
        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
      }
      if (r1) {
        x0 = r1 * Math.cos(a0 + p1);
        y0 = r1 * Math.sin(a0 + p1);
        x1 = r1 * Math.cos(a1 - p1);
        y1 = r1 * Math.sin(a1 - p1);
        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
          var h1 = (a0 + a1) / 2;
          x0 = r1 * Math.cos(h1);
          y0 = r1 * Math.sin(h1);
          x1 = y1 = null;
        }
      } else {
        x0 = y0 = 0;
      }
      if (r0) {
        x2 = r0 * Math.cos(a1 - p0);
        y2 = r0 * Math.sin(a1 - p0);
        x3 = r0 * Math.cos(a0 + p0);
        y3 = r0 * Math.sin(a0 + p0);
        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
          var h0 = (a0 + a1) / 2;
          x2 = r0 * Math.cos(h0);
          y2 = r0 * Math.sin(h0);
          x3 = y3 = null;
        }
      } else {
        x2 = y2 = 0;
      }
      if ((rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
        cr = r0 < r1 ^ cw ? 0 : 1;
        var oc = x3 == null ? [ x2, y2 ] : x1 == null ? [ x0, y0 ] : d3_geom_polygonIntersect([ x0, y0 ], [ x3, y3 ], [ x1, y1 ], [ x2, y2 ]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
        if (x1 != null) {
          var rc1 = Math.min(rc, (r1 - lc) / (kc + 1)), t30 = d3_svg_arcCornerTangents(x3 == null ? [ x2, y2 ] : [ x3, y3 ], [ x0, y0 ], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([ x1, y1 ], [ x2, y2 ], r1, rc1, cw);
          if (rc === rc1) {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
          } else {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
          }
        } else {
          path.push("M", x0, ",", y0);
        }
        if (x3 != null) {
          var rc0 = Math.min(rc, (r0 - lc) / (kc - 1)), t03 = d3_svg_arcCornerTangents([ x0, y0 ], [ x3, y3 ], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([ x2, y2 ], x1 == null ? [ x0, y0 ] : [ x1, y1 ], r0, -rc0, cw);
          if (rc === rc0) {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          } else {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          }
        } else {
          path.push("L", x2, ",", y2);
        }
      } else {
        path.push("M", x0, ",", y0);
        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
        path.push("L", x2, ",", y2);
        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
      }
      path.push("Z");
      return path.join("");
    }
    function circleSegment(r1, cw) {
      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
    }
    arc.innerRadius = function(v) {
      if (!arguments.length) return innerRadius;
      innerRadius = d3_functor(v);
      return arc;
    };
    arc.outerRadius = function(v) {
      if (!arguments.length) return outerRadius;
      outerRadius = d3_functor(v);
      return arc;
    };
    arc.cornerRadius = function(v) {
      if (!arguments.length) return cornerRadius;
      cornerRadius = d3_functor(v);
      return arc;
    };
    arc.padRadius = function(v) {
      if (!arguments.length) return padRadius;
      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
      return arc;
    };
    arc.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return arc;
    };
    arc.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return arc;
    };
    arc.padAngle = function(v) {
      if (!arguments.length) return padAngle;
      padAngle = d3_functor(v);
      return arc;
    };
    arc.centroid = function() {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
      return [ Math.cos(a) * r, Math.sin(a) * r ];
    };
    return arc;
  };
  var d3_svg_arcAuto = "auto";
  function d3_svg_arcInnerRadius(d) {
    return d.innerRadius;
  }
  function d3_svg_arcOuterRadius(d) {
    return d.outerRadius;
  }
  function d3_svg_arcStartAngle(d) {
    return d.startAngle;
  }
  function d3_svg_arcEndAngle(d) {
    return d.endAngle;
  }
  function d3_svg_arcPadAngle(d) {
    return d && d.padAngle;
  }
  function d3_svg_arcSweep(x0, y0, x1, y1) {
    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
  }
  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
    var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(r * r * d2 - D * D), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return [ [ cx0 - ox, cy0 - oy ], [ cx0 * r1 / r, cy0 * r1 / r ] ];
  }
  function d3_svg_line(projection) {
    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
    function line(data) {
      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
      function segment() {
        segments.push("M", interpolate(projection(points), tension));
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
        } else if (points.length) {
          segment();
          points = [];
        }
      }
      if (points.length) segment();
      return segments.length ? segments.join("") : null;
    }
    line.x = function(_) {
      if (!arguments.length) return x;
      x = _;
      return line;
    };
    line.y = function(_) {
      if (!arguments.length) return y;
      y = _;
      return line;
    };
    line.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return line;
    };
    line.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      return line;
    };
    line.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return line;
    };
    return line;
  }
  d3.svg.line = function() {
    return d3_svg_line(d3_identity);
  };
  var d3_svg_lineInterpolators = d3.map({
    linear: d3_svg_lineLinear,
    "linear-closed": d3_svg_lineLinearClosed,
    step: d3_svg_lineStep,
    "step-before": d3_svg_lineStepBefore,
    "step-after": d3_svg_lineStepAfter,
    basis: d3_svg_lineBasis,
    "basis-open": d3_svg_lineBasisOpen,
    "basis-closed": d3_svg_lineBasisClosed,
    bundle: d3_svg_lineBundle,
    cardinal: d3_svg_lineCardinal,
    "cardinal-open": d3_svg_lineCardinalOpen,
    "cardinal-closed": d3_svg_lineCardinalClosed,
    monotone: d3_svg_lineMonotone
  });
  d3_svg_lineInterpolators.forEach(function(key, value) {
    value.key = key;
    value.closed = /-closed$/.test(key);
  });
  function d3_svg_lineLinear(points) {
    return points.join("L");
  }
  function d3_svg_lineLinearClosed(points) {
    return d3_svg_lineLinear(points) + "Z";
  }
  function d3_svg_lineStep(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
    if (n > 1) path.push("H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepBefore(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepAfter(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
    return path.join("");
  }
  function d3_svg_lineCardinalOpen(points, tension) {
    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineCardinalClosed(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
  }
  function d3_svg_lineCardinal(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineHermite(points, tangents) {
    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
      return d3_svg_lineLinear(points);
    }
    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
    if (quad) {
      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
      p0 = points[1];
      pi = 2;
    }
    if (tangents.length > 1) {
      t = tangents[1];
      p = points[pi];
      pi++;
      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      for (var i = 2; i < tangents.length; i++, pi++) {
        p = points[pi];
        t = tangents[i];
        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      }
    }
    if (quad) {
      var lp = points[pi];
      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
    }
    return path;
  }
  function d3_svg_lineCardinalTangents(points, tension) {
    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
    while (++i < n) {
      p0 = p1;
      p1 = p2;
      p2 = points[i];
      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
    }
    return tangents;
  }
  function d3_svg_lineBasis(points) {
    if (points.length < 3) return d3_svg_lineLinear(points);
    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    points.push(points[n - 1]);
    while (++i <= n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    points.pop();
    path.push("L", pi);
    return path.join("");
  }
  function d3_svg_lineBasisOpen(points) {
    if (points.length < 4) return d3_svg_lineLinear(points);
    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
    while (++i < 3) {
      pi = points[i];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
    --i;
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBasisClosed(points) {
    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
    while (++i < 4) {
      pi = points[i % n];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    --i;
    while (++i < m) {
      pi = points[i % n];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBundle(points, tension) {
    var n = points.length - 1;
    if (n) {
      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
      while (++i <= n) {
        p = points[i];
        t = i / n;
        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
      }
    }
    return d3_svg_lineBasis(points);
  }
  function d3_svg_lineDot4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
  function d3_svg_lineBasisBezier(path, x, y) {
    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
  }
  function d3_svg_lineSlope(p0, p1) {
    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
  }
  function d3_svg_lineFiniteDifferences(points) {
    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
    while (++i < j) {
      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
    }
    m[i] = d;
    return m;
  }
  function d3_svg_lineMonotoneTangents(points) {
    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
    while (++i < j) {
      d = d3_svg_lineSlope(points[i], points[i + 1]);
      if (abs(d) < ε) {
        m[i] = m[i + 1] = 0;
      } else {
        a = m[i] / d;
        b = m[i + 1] / d;
        s = a * a + b * b;
        if (s > 9) {
          s = d * 3 / Math.sqrt(s);
          m[i] = s * a;
          m[i + 1] = s * b;
        }
      }
    }
    i = -1;
    while (++i <= j) {
      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
      tangents.push([ s || 0, m[i] * s || 0 ]);
    }
    return tangents;
  }
  function d3_svg_lineMonotone(points) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
  }
  d3.svg.line.radial = function() {
    var line = d3_svg_line(d3_svg_lineRadial);
    line.radius = line.x, delete line.x;
    line.angle = line.y, delete line.y;
    return line;
  };
  function d3_svg_lineRadial(points) {
    var point, i = -1, n = points.length, r, a;
    while (++i < n) {
      point = points[i];
      r = point[0];
      a = point[1] - halfπ;
      point[0] = r * Math.cos(a);
      point[1] = r * Math.sin(a);
    }
    return points;
  }
  function d3_svg_area(projection) {
    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
    function area(data) {
      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
        return x;
      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
        return y;
      } : d3_functor(y1), x, y;
      function segment() {
        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
        } else if (points0.length) {
          segment();
          points0 = [];
          points1 = [];
        }
      }
      if (points0.length) segment();
      return segments.length ? segments.join("") : null;
    }
    area.x = function(_) {
      if (!arguments.length) return x1;
      x0 = x1 = _;
      return area;
    };
    area.x0 = function(_) {
      if (!arguments.length) return x0;
      x0 = _;
      return area;
    };
    area.x1 = function(_) {
      if (!arguments.length) return x1;
      x1 = _;
      return area;
    };
    area.y = function(_) {
      if (!arguments.length) return y1;
      y0 = y1 = _;
      return area;
    };
    area.y0 = function(_) {
      if (!arguments.length) return y0;
      y0 = _;
      return area;
    };
    area.y1 = function(_) {
      if (!arguments.length) return y1;
      y1 = _;
      return area;
    };
    area.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return area;
    };
    area.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      interpolateReverse = interpolate.reverse || interpolate;
      L = interpolate.closed ? "M" : "L";
      return area;
    };
    area.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return area;
    };
    return area;
  }
  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
  d3.svg.area = function() {
    return d3_svg_area(d3_identity);
  };
  d3.svg.area.radial = function() {
    var area = d3_svg_area(d3_svg_lineRadial);
    area.radius = area.x, delete area.x;
    area.innerRadius = area.x0, delete area.x0;
    area.outerRadius = area.x1, delete area.x1;
    area.angle = area.y, delete area.y;
    area.startAngle = area.y0, delete area.y0;
    area.endAngle = area.y1, delete area.y1;
    return area;
  };
  d3.svg.chord = function() {
    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    function chord(d, i) {
      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
    }
    function subgroup(self, f, d, i) {
      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) - halfπ, a1 = endAngle.call(self, subgroup, i) - halfπ;
      return {
        r: r,
        a0: a0,
        a1: a1,
        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
      };
    }
    function equals(a, b) {
      return a.a0 == b.a0 && a.a1 == b.a1;
    }
    function arc(r, p, a) {
      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
    }
    function curve(r0, p0, r1, p1) {
      return "Q 0,0 " + p1;
    }
    chord.radius = function(v) {
      if (!arguments.length) return radius;
      radius = d3_functor(v);
      return chord;
    };
    chord.source = function(v) {
      if (!arguments.length) return source;
      source = d3_functor(v);
      return chord;
    };
    chord.target = function(v) {
      if (!arguments.length) return target;
      target = d3_functor(v);
      return chord;
    };
    chord.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return chord;
    };
    chord.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return chord;
    };
    return chord;
  };
  function d3_svg_chordRadius(d) {
    return d.radius;
  }
  d3.svg.diagonal = function() {
    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
    function diagonal(d, i) {
      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
        x: p0.x,
        y: m
      }, {
        x: p3.x,
        y: m
      }, p3 ];
      p = p.map(projection);
      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
    }
    diagonal.source = function(x) {
      if (!arguments.length) return source;
      source = d3_functor(x);
      return diagonal;
    };
    diagonal.target = function(x) {
      if (!arguments.length) return target;
      target = d3_functor(x);
      return diagonal;
    };
    diagonal.projection = function(x) {
      if (!arguments.length) return projection;
      projection = x;
      return diagonal;
    };
    return diagonal;
  };
  function d3_svg_diagonalProjection(d) {
    return [ d.x, d.y ];
  }
  d3.svg.diagonal.radial = function() {
    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
    diagonal.projection = function(x) {
      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
    };
    return diagonal;
  };
  function d3_svg_diagonalRadialProjection(projection) {
    return function() {
      var d = projection.apply(this, arguments), r = d[0], a = d[1] - halfπ;
      return [ r * Math.cos(a), r * Math.sin(a) ];
    };
  }
  d3.svg.symbol = function() {
    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
    function symbol(d, i) {
      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
    }
    symbol.type = function(x) {
      if (!arguments.length) return type;
      type = d3_functor(x);
      return symbol;
    };
    symbol.size = function(x) {
      if (!arguments.length) return size;
      size = d3_functor(x);
      return symbol;
    };
    return symbol;
  };
  function d3_svg_symbolSize() {
    return 64;
  }
  function d3_svg_symbolType() {
    return "circle";
  }
  function d3_svg_symbolCircle(size) {
    var r = Math.sqrt(size / π);
    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
  }
  var d3_svg_symbols = d3.map({
    circle: d3_svg_symbolCircle,
    cross: function(size) {
      var r = Math.sqrt(size / 5) / 2;
      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
    },
    diamond: function(size) {
      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
    },
    square: function(size) {
      var r = Math.sqrt(size) / 2;
      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
    },
    "triangle-down": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
    },
    "triangle-up": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
    }
  });
  d3.svg.symbolTypes = d3_svg_symbols.keys();
  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
  d3_selectionPrototype.transition = function(name) {
    var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
      time: Date.now(),
      ease: d3_ease_cubicInOut,
      delay: 0,
      duration: 250
    };
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_selectionPrototype.interrupt = function(name) {
    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
  };
  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
  function d3_selection_interruptNS(ns) {
    return function() {
      var lock, active;
      if ((lock = this[ns]) && (active = lock[lock.active])) {
        if (--lock.count) delete lock[lock.active]; else delete this[ns];
        lock.active += .5;
        active.event && active.event.interrupt.call(this, this.__data__, active.index);
      }
    };
  }
  function d3_transition(groups, ns, id) {
    d3_subclass(groups, d3_transitionPrototype);
    groups.namespace = ns;
    groups.id = id;
    return groups;
  }
  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
  d3_transitionPrototype.call = d3_selectionPrototype.call;
  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
  d3_transitionPrototype.node = d3_selectionPrototype.node;
  d3_transitionPrototype.size = d3_selectionPrototype.size;
  d3.transition = function(selection, name) {
    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3_selectionRoot.transition(selection);
  };
  d3.transition.prototype = d3_transitionPrototype;
  d3_transitionPrototype.select = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
          subgroup.push(subnode);
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.selectAll = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          transition = node[ns][id];
          subnodes = selector.call(node, node.__data__, i, j);
          subgroups.push(subgroup = []);
          for (var k = -1, o = subnodes.length; ++k < o; ) {
            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
            subgroup.push(subnode);
          }
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_transition(subgroups, this.namespace, this.id);
  };
  d3_transitionPrototype.tween = function(name, tween) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
    return d3_selection_each(this, tween == null ? function(node) {
      node[ns][id].tween.remove(name);
    } : function(node) {
      node[ns][id].tween.set(name, tween);
    });
  };
  function d3_transition_tween(groups, name, value, tween) {
    var id = groups.id, ns = groups.namespace;
    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
    } : (value = tween(value), function(node) {
      node[ns][id].tween.set(name, value);
    }));
  }
  d3_transitionPrototype.attr = function(nameNS, value) {
    if (arguments.length < 2) {
      for (value in nameNS) this.attr(value, nameNS[value]);
      return this;
    }
    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrTween(b) {
      return b == null ? attrNull : (b += "", function() {
        var a = this.getAttribute(name), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttribute(name, i(t));
        });
      });
    }
    function attrTweenNS(b) {
      return b == null ? attrNullNS : (b += "", function() {
        var a = this.getAttributeNS(name.space, name.local), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttributeNS(name.space, name.local, i(t));
        });
      });
    }
    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.attrTween = function(nameNS, tween) {
    var name = d3.ns.qualify(nameNS);
    function attrTween(d, i) {
      var f = tween.call(this, d, i, this.getAttribute(name));
      return f && function(t) {
        this.setAttribute(name, f(t));
      };
    }
    function attrTweenNS(d, i) {
      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
      return f && function(t) {
        this.setAttributeNS(name.space, name.local, f(t));
      };
    }
    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.style(priority, name[priority], value);
        return this;
      }
      priority = "";
    }
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleString(b) {
      return b == null ? styleNull : (b += "", function() {
        var a = d3_window.getComputedStyle(this, null).getPropertyValue(name), i;
        return a !== b && (i = d3_interpolate(a, b), function(t) {
          this.style.setProperty(name, i(t), priority);
        });
      });
    }
    return d3_transition_tween(this, "style." + name, value, styleString);
  };
  d3_transitionPrototype.styleTween = function(name, tween, priority) {
    if (arguments.length < 3) priority = "";
    function styleTween(d, i) {
      var f = tween.call(this, d, i, d3_window.getComputedStyle(this, null).getPropertyValue(name));
      return f && function(t) {
        this.style.setProperty(name, f(t), priority);
      };
    }
    return this.tween("style." + name, styleTween);
  };
  d3_transitionPrototype.text = function(value) {
    return d3_transition_tween(this, "text", value, d3_transition_text);
  };
  function d3_transition_text(b) {
    if (b == null) b = "";
    return function() {
      this.textContent = b;
    };
  }
  d3_transitionPrototype.remove = function() {
    var ns = this.namespace;
    return this.each("end.transition", function() {
      var p;
      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
    });
  };
  d3_transitionPrototype.ease = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].ease;
    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
    return d3_selection_each(this, function(node) {
      node[ns][id].ease = value;
    });
  };
  d3_transitionPrototype.delay = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].delay;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].delay = +value.call(node, node.__data__, i, j);
    } : (value = +value, function(node) {
      node[ns][id].delay = value;
    }));
  };
  d3_transitionPrototype.duration = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].duration;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
    } : (value = Math.max(1, value), function(node) {
      node[ns][id].duration = value;
    }));
  };
  d3_transitionPrototype.each = function(type, listener) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) {
      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
      try {
        d3_transitionInheritId = id;
        d3_selection_each(this, function(node, i, j) {
          d3_transitionInherit = node[ns][id];
          type.call(node, node.__data__, i, j);
        });
      } finally {
        d3_transitionInherit = inherit;
        d3_transitionInheritId = inheritId;
      }
    } else {
      d3_selection_each(this, function(node) {
        var transition = node[ns][id];
        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
      });
    }
    return this;
  };
  d3_transitionPrototype.transition = function() {
    var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if (node = group[i]) {
          transition = node[ns][id0];
          d3_transitionNode(node, i, ns, id1, {
            time: transition.time,
            ease: transition.ease,
            delay: transition.delay + transition.duration,
            duration: transition.duration
          });
        }
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id1);
  };
  function d3_transitionNamespace(name) {
    return name == null ? "__transition__" : "__transition_" + name + "__";
  }
  function d3_transitionNode(node, i, ns, id, inherit) {
    var lock = node[ns] || (node[ns] = {
      active: 0,
      count: 0
    }), transition = lock[id];
    if (!transition) {
      var time = inherit.time;
      transition = lock[id] = {
        tween: new d3_Map(),
        time: time,
        delay: inherit.delay,
        duration: inherit.duration,
        ease: inherit.ease,
        index: i
      };
      inherit = null;
      ++lock.count;
      d3.timer(function(elapsed) {
        var delay = transition.delay, duration, ease, timer = d3_timer_active, tweened = [];
        timer.t = delay + time;
        if (delay <= elapsed) return start(elapsed - delay);
        timer.c = start;
        function start(elapsed) {
          if (lock.active > id) return stop();
          var active = lock[lock.active];
          if (active) {
            --lock.count;
            delete lock[lock.active];
            active.event && active.event.interrupt.call(node, node.__data__, active.index);
          }
          lock.active = id;
          transition.event && transition.event.start.call(node, node.__data__, i);
          transition.tween.forEach(function(key, value) {
            if (value = value.call(node, node.__data__, i)) {
              tweened.push(value);
            }
          });
          ease = transition.ease;
          duration = transition.duration;
          d3.timer(function() {
            timer.c = tick(elapsed || 1) ? d3_true : tick;
            return 1;
          }, 0, time);
        }
        function tick(elapsed) {
          if (lock.active !== id) return 1;
          var t = elapsed / duration, e = ease(t), n = tweened.length;
          while (n > 0) {
            tweened[--n].call(node, e);
          }
          if (t >= 1) {
            transition.event && transition.event.end.call(node, node.__data__, i);
            return stop();
          }
        }
        function stop() {
          if (--lock.count) delete lock[id]; else delete node[ns];
          return 1;
        }
      }, 0, time);
    }
  }
  d3.svg.axis = function() {
    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
    function axis(g) {
      g.each(function() {
        var g = d3.select(this);
        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
        d3.transition(path));
        tickEnter.append("line");
        tickEnter.append("text");
        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
        if (orient === "bottom" || orient === "top") {
          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
        } else {
          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
        }
        lineEnter.attr(y2, sign * innerTickSize);
        textEnter.attr(y1, sign * tickSpacing);
        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
        if (scale1.rangeBand) {
          var x = scale1, dx = x.rangeBand() / 2;
          scale0 = scale1 = function(d) {
            return x(d) + dx;
          };
        } else if (scale0.rangeBand) {
          scale0 = scale1;
        } else {
          tickExit.call(tickTransform, scale1, scale0);
        }
        tickEnter.call(tickTransform, scale0, scale1);
        tickUpdate.call(tickTransform, scale1, scale1);
      });
    }
    axis.scale = function(x) {
      if (!arguments.length) return scale;
      scale = x;
      return axis;
    };
    axis.orient = function(x) {
      if (!arguments.length) return orient;
      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
      return axis;
    };
    axis.ticks = function() {
      if (!arguments.length) return tickArguments_;
      tickArguments_ = arguments;
      return axis;
    };
    axis.tickValues = function(x) {
      if (!arguments.length) return tickValues;
      tickValues = x;
      return axis;
    };
    axis.tickFormat = function(x) {
      if (!arguments.length) return tickFormat_;
      tickFormat_ = x;
      return axis;
    };
    axis.tickSize = function(x) {
      var n = arguments.length;
      if (!n) return innerTickSize;
      innerTickSize = +x;
      outerTickSize = +arguments[n - 1];
      return axis;
    };
    axis.innerTickSize = function(x) {
      if (!arguments.length) return innerTickSize;
      innerTickSize = +x;
      return axis;
    };
    axis.outerTickSize = function(x) {
      if (!arguments.length) return outerTickSize;
      outerTickSize = +x;
      return axis;
    };
    axis.tickPadding = function(x) {
      if (!arguments.length) return tickPadding;
      tickPadding = +x;
      return axis;
    };
    axis.tickSubdivide = function() {
      return arguments.length && axis;
    };
    return axis;
  };
  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  };
  function d3_svg_axisX(selection, x0, x1) {
    selection.attr("transform", function(d) {
      var v0 = x0(d);
      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
    });
  }
  function d3_svg_axisY(selection, y0, y1) {
    selection.attr("transform", function(d) {
      var v0 = y0(d);
      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
    });
  }
  d3.svg.brush = function() {
    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
    function brush(g) {
      g.each(function() {
        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
        var background = g.selectAll(".background").data([ 0 ]);
        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var resize = g.selectAll(".resize").data(resizes, d3_identity);
        resize.exit().remove();
        resize.enter().append("g").attr("class", function(d) {
          return "resize " + d;
        }).style("cursor", function(d) {
          return d3_svg_brushCursor[d];
        }).append("rect").attr("x", function(d) {
          return /[ew]$/.test(d) ? -3 : null;
        }).attr("y", function(d) {
          return /^[ns]/.test(d) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
        resize.style("display", brush.empty() ? "none" : null);
        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
        if (x) {
          range = d3_scaleRange(x);
          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
          redrawX(gUpdate);
        }
        if (y) {
          range = d3_scaleRange(y);
          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
          redrawY(gUpdate);
        }
        redraw(gUpdate);
      });
    }
    brush.event = function(g) {
      g.each(function() {
        var event_ = event.of(this, arguments), extent1 = {
          x: xExtent,
          y: yExtent,
          i: xExtentDomain,
          j: yExtentDomain
        }, extent0 = this.__chart__ || extent1;
        this.__chart__ = extent1;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.brush", function() {
            xExtentDomain = extent0.i;
            yExtentDomain = extent0.j;
            xExtent = extent0.x;
            yExtent = extent0.y;
            event_({
              type: "brushstart"
            });
          }).tween("brush:brush", function() {
            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
            xExtentDomain = yExtentDomain = null;
            return function(t) {
              xExtent = extent1.x = xi(t);
              yExtent = extent1.y = yi(t);
              event_({
                type: "brush",
                mode: "resize"
              });
            };
          }).each("end.brush", function() {
            xExtentDomain = extent1.i;
            yExtentDomain = extent1.j;
            event_({
              type: "brush",
              mode: "resize"
            });
            event_({
              type: "brushend"
            });
          });
        } else {
          event_({
            type: "brushstart"
          });
          event_({
            type: "brush",
            mode: "resize"
          });
          event_({
            type: "brushend"
          });
        }
      });
    };
    function redraw(g) {
      g.selectAll(".resize").attr("transform", function(d) {
        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
      });
    }
    function redrawX(g) {
      g.select(".extent").attr("x", xExtent[0]);
      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
    }
    function redrawY(g) {
      g.select(".extent").attr("y", yExtent[0]);
      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
    }
    function brushstart() {
      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(), center, origin = d3.mouse(target), offset;
      var w = d3.select(d3_window).on("keydown.brush", keydown).on("keyup.brush", keyup);
      if (d3.event.changedTouches) {
        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
      } else {
        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
      }
      g.interrupt().selectAll("*").interrupt();
      if (dragging) {
        origin[0] = xExtent[0] - origin[0];
        origin[1] = yExtent[0] - origin[1];
      } else if (resizing) {
        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
        origin[0] = xExtent[ex];
        origin[1] = yExtent[ey];
      } else if (d3.event.altKey) center = origin.slice();
      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
      d3.select("body").style("cursor", eventTarget.style("cursor"));
      event_({
        type: "brushstart"
      });
      brushmove();
      function keydown() {
        if (d3.event.keyCode == 32) {
          if (!dragging) {
            center = null;
            origin[0] -= xExtent[1];
            origin[1] -= yExtent[1];
            dragging = 2;
          }
          d3_eventPreventDefault();
        }
      }
      function keyup() {
        if (d3.event.keyCode == 32 && dragging == 2) {
          origin[0] += xExtent[1];
          origin[1] += yExtent[1];
          dragging = 0;
          d3_eventPreventDefault();
        }
      }
      function brushmove() {
        var point = d3.mouse(target), moved = false;
        if (offset) {
          point[0] += offset[0];
          point[1] += offset[1];
        }
        if (!dragging) {
          if (d3.event.altKey) {
            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
            origin[0] = xExtent[+(point[0] < center[0])];
            origin[1] = yExtent[+(point[1] < center[1])];
          } else center = null;
        }
        if (resizingX && move1(point, x, 0)) {
          redrawX(g);
          moved = true;
        }
        if (resizingY && move1(point, y, 1)) {
          redrawY(g);
          moved = true;
        }
        if (moved) {
          redraw(g);
          event_({
            type: "brush",
            mode: dragging ? "move" : "resize"
          });
        }
      }
      function move1(point, scale, i) {
        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
        if (dragging) {
          r0 -= position;
          r1 -= size + position;
        }
        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
        if (dragging) {
          max = (min += position) + size;
        } else {
          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
          if (position < min) {
            max = min;
            min = position;
          } else {
            max = position;
          }
        }
        if (extent[0] != min || extent[1] != max) {
          if (i) yExtentDomain = null; else xExtentDomain = null;
          extent[0] = min;
          extent[1] = max;
          return true;
        }
      }
      function brushend() {
        brushmove();
        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
        d3.select("body").style("cursor", null);
        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
        dragRestore();
        event_({
          type: "brushend"
        });
      }
    }
    brush.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.clamp = function(z) {
      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
      return brush;
    };
    brush.extent = function(z) {
      var x0, x1, y0, y1, t;
      if (!arguments.length) {
        if (x) {
          if (xExtentDomain) {
            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
          } else {
            x0 = xExtent[0], x1 = xExtent[1];
            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
            if (x1 < x0) t = x0, x0 = x1, x1 = t;
          }
        }
        if (y) {
          if (yExtentDomain) {
            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
          } else {
            y0 = yExtent[0], y1 = yExtent[1];
            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
            if (y1 < y0) t = y0, y0 = y1, y1 = t;
          }
        }
        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
      }
      if (x) {
        x0 = z[0], x1 = z[1];
        if (y) x0 = x0[0], x1 = x1[0];
        xExtentDomain = [ x0, x1 ];
        if (x.invert) x0 = x(x0), x1 = x(x1);
        if (x1 < x0) t = x0, x0 = x1, x1 = t;
        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
      }
      if (y) {
        y0 = z[0], y1 = z[1];
        if (x) y0 = y0[1], y1 = y1[1];
        yExtentDomain = [ y0, y1 ];
        if (y.invert) y0 = y(y0), y1 = y(y1);
        if (y1 < y0) t = y0, y0 = y1, y1 = t;
        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
      }
      return brush;
    };
    brush.clear = function() {
      if (!brush.empty()) {
        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
        xExtentDomain = yExtentDomain = null;
      }
      return brush;
    };
    brush.empty = function() {
      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
    };
    return d3.rebind(brush, event, "on");
  };
  var d3_svg_brushCursor = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
  var d3_time_formatUtc = d3_time_format.utc;
  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
  function d3_time_formatIsoNative(date) {
    return date.toISOString();
  }
  d3_time_formatIsoNative.parse = function(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  };
  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
  d3_time.second = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 1e3) * 1e3);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
  }, function(date) {
    return date.getSeconds();
  });
  d3_time.seconds = d3_time.second.range;
  d3_time.seconds.utc = d3_time.second.utc.range;
  d3_time.minute = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 6e4) * 6e4);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
  }, function(date) {
    return date.getMinutes();
  });
  d3_time.minutes = d3_time.minute.range;
  d3_time.minutes.utc = d3_time.minute.utc.range;
  d3_time.hour = d3_time_interval(function(date) {
    var timezone = date.getTimezoneOffset() / 60;
    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
  }, function(date) {
    return date.getHours();
  });
  d3_time.hours = d3_time.hour.range;
  d3_time.hours.utc = d3_time.hour.utc.range;
  d3_time.month = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setDate(1);
    return date;
  }, function(date, offset) {
    date.setMonth(date.getMonth() + offset);
  }, function(date) {
    return date.getMonth();
  });
  d3_time.months = d3_time.month.range;
  d3_time.months.utc = d3_time.month.utc.range;
  function d3_time_scale(linear, methods, format) {
    function scale(x) {
      return linear(x);
    }
    scale.invert = function(x) {
      return d3_time_scaleDate(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
      linear.domain(x);
      return scale;
    };
    function tickMethod(extent, count) {
      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
        return d / 31536e6;
      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
    }
    scale.nice = function(interval, skip) {
      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
      if (method) interval = method[0], skip = method[1];
      function skipped(date) {
        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
      }
      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
        floor: function(date) {
          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
          return date;
        },
        ceil: function(date) {
          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
          return date;
        }
      } : interval));
    };
    scale.ticks = function(interval, skip) {
      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
        range: interval
      }, skip ];
      if (method) interval = method[0], skip = method[1];
      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
    };
    scale.tickFormat = function() {
      return format;
    };
    scale.copy = function() {
      return d3_time_scale(linear.copy(), methods, format);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_time_scaleDate(t) {
    return new Date(t);
  }
  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
    return d.getMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getMinutes();
  } ], [ "%I %p", function(d) {
    return d.getHours();
  } ], [ "%a %d", function(d) {
    return d.getDay() && d.getDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getDate() != 1;
  } ], [ "%B", function(d) {
    return d.getMonth();
  } ], [ "%Y", d3_true ] ]);
  var d3_time_scaleMilliseconds = {
    range: function(start, stop, step) {
      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
    },
    floor: d3_identity,
    ceil: d3_identity
  };
  d3_time_scaleLocalMethods.year = d3_time.year;
  d3_time.scale = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
  };
  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
    return [ m[0].utc, m[1] ];
  });
  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
    return d.getUTCMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getUTCSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getUTCMinutes();
  } ], [ "%I %p", function(d) {
    return d.getUTCHours();
  } ], [ "%a %d", function(d) {
    return d.getUTCDay() && d.getUTCDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getUTCDate() != 1;
  } ], [ "%B", function(d) {
    return d.getUTCMonth();
  } ], [ "%Y", d3_true ] ]);
  d3_time_scaleUtcMethods.year = d3_time.year.utc;
  d3_time.scale.utc = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
  };
  d3.text = d3_xhrType(function(request) {
    return request.responseText;
  });
  d3.json = function(url, callback) {
    return d3_xhr(url, "application/json", d3_json, callback);
  };
  function d3_json(request) {
    return JSON.parse(request.responseText);
  }
  d3.html = function(url, callback) {
    return d3_xhr(url, "text/html", d3_html, callback);
  };
  function d3_html(request) {
    var range = d3_document.createRange();
    range.selectNode(d3_document.body);
    return range.createContextualFragment(request.responseText);
  }
  d3.xml = d3_xhrType(function(request) {
    return request.responseXML;
  });
  if (typeof define === "function" && define.amd) define(d3); else if (typeof module === "object" && module.exports) module.exports = d3;
  this.d3 = d3;
}();
},{}],"biojs-sub-cellular-localization-in-cell":[function(require,module,exports){


var d3 = require("d3");


var data = require("./svgdata");
var arch_svg = data.arch;

var view = {};
view.path = "./";

var subcellularlocalization = function () {


    //Global variables
	var cellType = "";
    var scoreProtein = [];	
	var scoreColorArray = [];
	var localizationColorArray = [];
	
	var roundedRightArray =[];
	
	var isNotOneProtein = false;
	
	var selectedcolorLoc="green";
	var selectedcolorScore="red";

	var cellPos = 0;

	var cellTypeArray = [
    "eukaryota",
    "bacteria",
    "archaea"    
    ]

	var eukaPos = 0;
	var bactPos = 0;
	var archPos = 0;
	
	var secondlineScore  = "";


	//18 cell compartments for Eukaryota
	var eukaryotaArray = [
      "chloroplast",
      "chloroplast membrane",
      "cytoplasm",
      "endoplasmic reticulum",
      "endoplasmic reticulum membrane",
      "secreted",
      "golgi apparatus",
      "golgi apparatus membrane",
      "mitochondrion",
      "mitochondrion membrane",
      "nucleus",
      "nucleus membrane",
      "peroxisome",
      "peroxisome membrane",
      "plastid",
      "plasma membrane",
      "vacuole",
      "vacuole membrane"
      ];

	//3 cell compartments for Archea
	var archeaArray = [
      "cytoplasm",
      "secreted",
      "plasma membrane"];

	//6 cell compartments for Bacteria
	var bacteriaArray = [
        "cytoplasm",
        "secreted",
        "fimbrium",
        "outer membrane",
        "periplasm",
        "inner membrane"
        ];
        	   
	    
    //Clear popup when moveout
    view.ClearPopup = function() {
	    var popup = getPopupObject('linkPopup');
        popup.style.visibility = 'hidden';	
    }

    //To get id from element
    function getPopupObject(myId) {
        if (document.getElementById(myId)) {
            return document.getElementById(myId);
        }
        else {
            return window.document[myId];
        }
    }

    //Shown popup
    view.mouseEventHandler = function(mEvent,cID,pID) {
	   
        // Internet Explorer	
        if (mEvent.srcElement) {
            showPopup(mEvent, 'linkPopup', mEvent.srcElement, cID,pID);
        }
        // Netscape and Firefox
        else if (mEvent.target) {
            showPopup(mEvent, 'linkPopup', mEvent.target, cID,pID);
        }
    } 
	
	//Showing score with little popup
	view.showHighlightScore = function(proteinID)
	{	 	
			
		ClearPopup();	 
		selectCellPicture();		

        scoreColorArray=definedColorScore(secondlineScore);	
		
		 for (var i = 0; i < scoreColorArray.length; i++) {
		          
		          var highlightColor = scoreColorArray[i];
		 	 	  if(proteinID == highlightColor.proteinID)
			 	  {		
				  	 	                       	  		
				  	  highlightCompartments(highlightColor.proteinID, highlightColor.proteinLocalization,highlightColor.scoreColor);		
				  }		  
			 }	
			 
		//Header
       	writeHeader('headerPP',proteinID);			
		isNotOneProtein = false;	
		
	} 
	
	//Select a color for localization		
	function getDropdownListSelectedColorLoc() {	
	var e = document.getElementById("ddlColorLoc");
	selectedcolorLoc = e.options[e.selectedIndex].value;	
   }
      
   //Select a color for score	
	function getDropdownListSelectedColorScore() {	
	var e = document.getElementById("ddlColorScore");
	selectedcolorScore = e.options[e.selectedIndex].value;	
   }
	
	
	function writeHeader(objectName,proteinID)
	{
	 	var divHeader = getPopupObject(objectName);
		while (divHeader.hasChildNodes()) {
			  divHeader.removeChild(divHeader.firstChild);
        }		
              var addHeader = document.createElement("h2");
			     if(proteinID == "")
				 {
				     addHeader.innerHTML = "Cell Type : "+ cellType;
				 }
				 else
				 {
                  	 addHeader.innerHTML = "Cell Type : "+ cellType + " , Protein ID : " + proteinID;
				 } 
                  divHeader.appendChild(addHeader);
	}
	//cID = protein localization,pID = proteinID
    function showPopup(myEvent, id, myElement,cID,pID) {
        var popup = getPopupObject(id);
        if (popup) {

            popup.style.visibility = 'hidden';
            var x = myEvent.clientX;
            var y = myEvent.clientY;
			
            x = parseInt(myEvent.clientX + document.body.scrollLeft);
            y = parseInt(myEvent.clientY + document.body.scrollTop);			
            
			var headerPopup = getPopupObject('popHeader');
			var detailPopup = getPopupObject('popDetail');

            //Remove all children before append
            while (detailPopup.hasChildNodes()) {
                
                  detailPopup.removeChild(detailPopup.firstChild);
            }	
			
			//Remove all children before append
                 while (headerPopup.hasChildNodes()) {                
                  	  headerPopup.removeChild(headerPopup.firstChild);
               }				 	
					var isHeader = true;								
					for (var i = 0; i < scoreProtein.length; i++) {                  					 
							var scorePT =  scoreProtein[i];							    
						 	         //Showing protein popup
								 	 if(isNotOneProtein)
									 {		
									 		if (cID == scorePT.proteinLocalization)
									 			{		
														
													if(isHeader)
													{																
																										      
        												   //Header
                                                			var rowHeaderProtein = document.createElement("tr");
                                                            rowHeaderProtein.setAttribute("id", "rowHeaderProtein" + i);
                                                            var columnHeaderProtein = document.createElement("td");
                                                            columnHeaderProtein.setAttribute("id", "columnHeaderProtein" + i);					
                                                            //var innerHeaderTag = document.createElement("p");
                                                            //innerHeaderTag.setAttribute("id", "innerHeaderTag" + i);                              				    					
                                                            columnHeaderProtein.innerHTML = "<b>Localization = " + scorePT.proteinLocalization + "<br/>Protein ID : Score<br/> </b>";
                                                                                					
                                                            //columnHeaderProtein.appendChild(innerHeaderTag);                  
                                                            rowHeaderProtein.appendChild(columnHeaderProtein);
                                                            headerPopup.appendChild(rowHeaderProtein);	
															isHeader = false;
													}	
												
												
													
													//Detail												                                                
                                                    var rowProtein = document.createElement("tr");
                                                    rowProtein.setAttribute("id", "rowProtein" + i);
                                                    var columnProtein = document.createElement("td");
                                                    columnProtein.setAttribute("id", "columnProtein" + i);					
                                					var innerTag = document.createElement("span");
                                					innerTag.setAttribute("id", "innnerText" + i);				
    																					
                                				    innerTag.setAttribute("onClick", "javaScript:showHighlightScore('"+scorePT.proteinID+"');");						
                                					innerTag.innerHTML = "<a href='#'>" + scorePT.proteinID + ":<b>" + scorePT.proteinScore+"</b></a>";
													                                					
                                					columnProtein.appendChild(innerTag);                  
                                					rowProtein.appendChild(columnProtein);
                                                    detailPopup.appendChild(rowProtein);		   
										   
                                  				 }
									 }
									else {
                                     //Showing score popup
									  	if ((pID == scorePT.proteinID) && (cID == scorePT.proteinLocalization))	    						
    									    {												     					 
									 		 	 drawPopupScore(scorePT.proteinScore,detailPopup);						  
                						    	 break;		
											}							 	
									  }				 
                  					 
                	}               				 			
        						
					
            popup.style.left = x;
            popup.style.top = y;			
            popup.style.visibility = 'visible';
			
        }
    }
	
	
	function drawPopupScore(proteinScore,detailPopup)
	{
	 		 var rowProtein = document.createElement("tr");
                 rowProtein.setAttribute("id", "rowProtein0");
             var columnProtein = document.createElement("td");
                 columnProtein.setAttribute("id", "columnProtein0");				
                 columnProtein.innerHTML = "<p class='oneProtein' onmouseout='javaScript:ClearPopup();' >" + proteinScore + "</p>";
                 rowProtein.appendChild(columnProtein);
                 detailPopup.appendChild(rowProtein);
	
	}
	
	function drawTableDescription(proteinID)
	{			 
			//To clear all children
			var divTableLoc = getPopupObject('tdTblDescriptionLoc');
        		  	  while (divTableLoc.hasChildNodes()) {
			  		  		divTableLoc.removeChild(divTableLoc.firstChild);
					  }
			 divTableLoc.style.visibility = 'hidden';
			 var divTableScore = getPopupObject('tdTblDescriptionScore');
        		  	  while (divTableScore.hasChildNodes()) {
			  		  		divTableScore.removeChild(divTableScore.firstChild);
					  }
			 divTableScore.style.visibility = 'hidden';
			  var divbtnBack = getPopupObject('btnBack');
				 while (divbtnBack.hasChildNodes()) {
			  	 	  		divbtnBack.removeChild(divbtnBack.firstChild);
				 	  }
			 
			  if(proteinID != "")
			  {
			     //To create go back botton
			    
				divbtnBack.innerHTML = "<label style='float:left;'>Go back to localization visualization </label><input style='float:left;' type='submit' value='Go Back' onclick = \"main();\">";
			    
			     var strScoreTable = "";
			     strScoreTable += "<table><tr><td>Localization</td><td>Score</td></tr>";
					 					 
					 for (var i = 0; i < scoreColorArray.length; i++) {
		          	 	  var scoreColor = scoreColorArray[i];
						  
						  if(proteinID==scoreColor.proteinID)
						  {						   									 
						      strScoreTable += "<tr><td>" + scoreColor.proteinLocalization + "</td><td class='adjustRight'>" + scoreColor.proteinScore + "</td></tr>";
						  }						  
						  
				     }
					 
					 strScoreTable += "</table>"; 
			     divTableScore.innerHTML = strScoreTable;
				 divTableScore.style.visibility = 'visible';						 
			  }
			  else
			  {
			     var strLocTable = "";
			     strLocTable += "<table><tr><td>Localization</td><td>#proteins</td><td>%</td></tr>";
					 					 
					 for (var i = 0; i < localizationColorArray.length; i++) {
		          	 	  var LocColor = localizationColorArray[i];
						  var locNbr = LocColor.numberProtein;
						  if(LocColor.numberProtein == 0)
						  {
						   locNbr = "";
						  }
						  var locPercent = LocColor.percentProtein;
						  if(LocColor.percentProtein == 0)
						  {
						   locPercent = "";
						  }				  			  
						   
		          	 	  strLocTable += "<tr><td>" + LocColor.proteinLocalization + "</td><td class='adjustRight'>" + locNbr + "</td><td class='adjustRight'>" + locPercent + "</td></tr>";
						  
				     }
				 strLocTable += "</table>"; 
			     divTableLoc.innerHTML = strLocTable;
				 divTableLoc.style.visibility = 'visible';
			  }
			  
	}
	
	
	function drawCaptionColor(proteinID)
	{
			//To clear all captions
			var divCaptionLoc = getPopupObject('localization');
        		  	  while (divCaptionLoc.hasChildNodes()) {
			  		  		divCaptionLoc.removeChild(divCaptionLoc.firstChild);
					  }
			 var divCaptionScore = getPopupObject('score');
        		  	  while (divCaptionScore.hasChildNodes()) {
			  		  		divCaptionScore.removeChild(divCaptionScore.firstChild);
					  }				  
			  
			//Color arrays
			  
			//Blue - 0
			var blue_colorArray=["#EBEBE0","#D6E0EB","#C2D1E0","#ADC2D6","#99B2CC","#85A3C2","#5C85AD","#336699","#29527A","#1F3D5C"];

			//Green - 1
		    var green_colorArray=["#E8F4E9","#D7FCDC","#B9FAC3","#96F6A5","#76E687","#4DCB60","#379745","#167023","#045310","#003F0A"];
	
			//Lila - 2
			var lila_colorArray=["#FAE6FA","#F5CCF5","#F0B2F0","#EB99EB","#E680E6","#E066E0","#D633D6","#B800B8","#8F008F","#660066"];
		
			//Red - 3
			var red_colorArray=["#FAE6E6","#F5CCCC","#F0B2B2","#EB9999","#E68080","#E06666","#D63333","#CC0000","#A30000","#7A0000"];
		
		
			  //Showing Score caption
			  if(proteinID != "")
			  {
							
					var colorScoreArray_caption = [];				
					

					if(selectedcolorScore  == "blue"){
						colorScoreArray_caption = blue_colorArray.slice(0);
					}
					else if (selectedcolorScore  == "green"){
						colorScoreArray_caption = green_colorArray.slice(0); 
					}
					else if (selectedcolorScore  == "lila"){
						colorScoreArray_caption = lila_colorArray.slice(0); 
					}
					else if (selectedcolorScore == "red"){
						colorScoreArray_caption = red_colorArray.slice(0); 						
					}
					else{
						//Red
						var red_colorArray=["#FAE6E6","#F5CCCC","#F0B2B2","#EB9999","#E68080","#E06666","#D63333","#CC0000","#A30000","#7A0000"];
					}
			  
			  
					var scoreColors="";
					for (var i = 0; i < colorScoreArray_caption.length; i++) {
						scoreColors = scoreColors + "<td bgcolor='"+colorScoreArray_caption[i]+"' height='5' width='20'></td>";
						
					}
			         
					   divCaptionScore.innerHTML = "<table><tr><td colspan='22' height='5' width='20'><span style='font-weight:bold;font-family:tahoma'><font size='2'>Score: </font></span></td></tr>"                     
					  
                      + "<tr><td bgcolor='#151717' height='5' width='20'><font size='2'>Min</font></td><td bgcolor='#ffffff' height='5' width='20'></td>" + scoreColors	+ "<td height='5' width='18'><font size='2'>Max</font></td></tr>"			  					   						
					  + "<tr>"					   
                        + "<td></td>"   
						+ "<td bgcolor='#151717' height='5' width='20'><font size='2'>0</font></td>"
                    	+ "<td bgcolor='#151717' height='5' width='20'><font size='2'>10</font></td>"
                    	+ "<td bgcolor='#151717' height='5' width='20'><font size='2'>20</font></td>"
                    	+ "<td bgcolor='#151717' height='5' width='20'><font size='2'>30</font></td>"
                    	+ "<td bgcolor='#151717' height='5' width='20'><font size='2'>40</font></td>"
                    	+ "<td bgcolor='#151717' height='5' width='20'><font size='2'>50</font></td>"
                    	+ "<td bgcolor='#151717' height='5' width='20'><font size='2'>60</font></td>"
                    	+ "<td bgcolor='#151717' height='5' width='20'><font size='2'>70</font></td>"
                    	+ "<td bgcolor='#151717' height='5' width='20'><font size='2'>80</font></td>"
                    	+ "<td bgcolor='#151717' height='5' width='20'><font size='2'>90</font></td>"
                    	+ "<td bgcolor='#151717' height='5' width='20'><font size='2'>100</font></td>"
                       
						//+ "<td><font size='2'>%</font></td>"                    	
                      + "</tr>"
					  
					+ "</table>";
					  
        	  }
			  
			  else
			  {
			   	 //Showing Localization caption 
					
		            var colorLocalizationArray_caption=[];
					
					if(selectedcolorLoc == "blue"){
						colorLocalizationArray_caption = blue_colorArray.slice(0);
					}
					else if (selectedcolorLoc == "green"){
						colorLocalizationArray_caption = green_colorArray.slice(0); 
					}
					else if (selectedcolorLoc == "lila"){
						colorLocalizationArray_caption = lila_colorArray.slice(0); 
					}
					else if (selectedcolorLoc == "red"){
						colorLocalizationArray_caption = red_colorArray.slice(0); 
					}
					else{
					//Green 
						colorLocalizationArray_caption=["#E8F4E9","#D7FCDC","#B9FAC3","#96F6A5","#76E687","#4DCB60","#379745","#167023","#045310","#003F0A"];
					}
								 			 
					 
					var locColors="";
					for (var i = 0; i < colorLocalizationArray_caption.length; i++) {
						locColors = locColors + "<td bgcolor='"+colorLocalizationArray_caption[i]+"' height='5' width='20'></td>";
					}
					 
					 
					//Print size class in percentages					
					
					var locPercentages="";
					for (var i = 0; i < roundedRightArray.length; i++) {
						locPercentages = locPercentages + "<td bgcolor='#151717' height='5' width='20'><span style='font-family:tahoma;'><font size='2'>"+roundedRightArray[i]+"</font></span></td>";
					}			
					 divCaptionLoc.innerHTML = "<table><tr><td colspan='22' height='5' width='20'><span style='font-weight:bold;font-family:tahoma'><font size='2'>Localization: </font></span></td></tr>"                     
                      + "<tr><td height='5' width='20'><font size='2'>Min</font></td></td><td bgcolor='#ffffff' height='5' width='20'></td>" + locColors	+ "<td height='5' width='18'><font size='2'>Max</font></td></tr>"			  					   
					  + "<tr><td height='5' width='20'></td><td bgcolor='#151717' height='5' width='20'><font size='2'>0</font></td>" + locPercentages + "<td><font size='2'>%</font></td></tr>"                      
                      + "</table>"; 
			  }	        
	
	}

	function drawProtein(proteinID, proteinLocalization, colorCellCompartment, id, svgpath) {
		var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", id)
				  .attr("fill", colorCellCompartment)
				  .attr("d", svgpath)
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");
	} 

	function drawProteinMembrane(proteinID, proteinLocalization, colorCellCompartment, id, svgpath) {
		var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", id)
				  .attr("fill", "none")
				  .attr("stroke", colorCellCompartment)
				  .attr("stroke-width", "3")
				  .attr("d", svgpath)
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	}
	
    function highlightCompartments(proteinID, proteinLocalization,colorCellCompartment) {	
	
	    drawCaptionColor(proteinID);
		drawTableDescription(proteinID);

	    if (cellType == cellTypeArray[cellPos]) {

	        if (proteinLocalization == eukaryotaArray[eukaPos]) {

	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "chloroplast_euka")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 180.25,115.50 "
           + "C 180.08,114.21 207.61,114.28 207.50,115.00 "
             + "207.50,115.00 222.00,117.75 222.00,117.75 "
             + "223.08,117.30 231.42,122.85 229.25,123.75 "
             + "229.25,123.75 230.75,129.25 230.75,129.25 "
             + "230.75,129.25 223.25,135.00 223.25,135.00 "
             + "223.25,135.00 207.25,141.25 207.25,141.25 "
             + "207.25,141.25 186.00,143.75 186.00,143.75 "
             + "186.00,143.75 174.50,143.50 174.50,143.50 "
             + "174.50,143.50 165.75,141.00 165.75,141.00 "
             + "165.75,141.00 161.25,137.50 161.25,137.50 "
             + "161.25,137.50 159.00,134.25 159.00,134.25 "
             + "159.00,134.25 158.75,130.50 158.75,130.50 "
             + "158.75,130.50 160.50,126.25 160.50,126.25 "
             + "160.50,126.25 163.50,122.50 163.50,122.50 "
             + "163.50,122.50 166.75,119.25 166.75,119.25 "
             + "166.75,119.25 171.50,117.50 171.50,117.50 "
             + "171.50,117.50 176.25,115.75 176.25,115.75 Z")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }
	        else if (proteinLocalization == eukaryotaArray[eukaPos + 1]) {
	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "chlorMem_euka")
				  .attr("fill", "none")
				  .attr("stroke", colorCellCompartment)
				  .attr("stroke-width", "3")
				  .attr("d", "M 180.25,115.50 "
           + "C 180.08,114.21 207.61,114.28 207.50,115.00 "
             + "207.50,115.00 222.00,117.75 222.00,117.75 "
             + "223.08,117.30 231.42,122.85 229.25,123.75 "
             + "229.25,123.75 230.75,129.25 230.75,129.25 "
             + "230.75,129.25 223.25,135.00 223.25,135.00 "
             + "223.25,135.00 207.25,141.25 207.25,141.25 "
             + "207.25,141.25 186.00,143.75 186.00,143.75 "
             + "186.00,143.75 174.50,143.50 174.50,143.50 "
             + "174.50,143.50 165.75,141.00 165.75,141.00 "
             + "165.75,141.00 161.25,137.50 161.25,137.50 "
             + "161.25,137.50 159.00,134.25 159.00,134.25 "
             + "159.00,134.25 158.75,130.50 158.75,130.50 "
             + "158.75,130.50 160.50,126.25 160.50,126.25 "
             + "160.50,126.25 163.50,122.50 163.50,122.50 "
             + "163.50,122.50 166.75,119.25 166.75,119.25 "
             + "166.75,119.25 171.50,117.50 171.50,117.50 "
             + "171.50,117.50 176.25,115.75 176.25,115.75 Z")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");


	        }
	        else if (proteinLocalization == eukaryotaArray[eukaPos + 2]) {
	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "cytosol_euka")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 237.00,103.21 "
           + "C 237.00,103.21 254.00,104.00 254.00,104.00 "
             + "292.05,104.06 320.17,102.63 358.00,112.13 "
             + "373.51,116.02 390.30,121.51 403.00,131.52 "
             + "424.69,148.60 439.19,185.64 423.53,211.00 "
             + "419.75,217.13 413.87,221.62 408.00,225.65 "
             + "386.74,240.25 365.96,244.95 341.00,249.08 "
             + "329.78,250.94 318.39,252.94 307.00,253.00 "
             + "307.00,253.00 291.00,254.00 291.00,254.00 "
             + "291.00,254.00 211.00,254.00 211.00,254.00 "
             + "211.00,254.00 180.00,251.17 180.00,251.17 "
             + "158.26,248.99 131.10,245.51 112.00,234.57 "
             + "101.09,228.33 88.57,219.33 82.63,208.00 "
             + "79.96,202.90 76.78,193.72 76.17,188.00 "
             + "75.40,180.75 77.24,172.00 79.15,165.00 "
             + "84.12,146.84 91.38,131.78 108.00,121.47 "
             + "126.87,109.76 150.29,106.43 172.00,104.91 "
             + "172.00,104.91 184.00,104.00 184.00,104.00 "
             + "189.21,103.99 192.75,104.17 198.00,103.21 "
             + "198.00,103.21 237.00,103.21 237.00,103.21 Z "
           + "M 162.13,121.47 "
           + "C 155.87,127.28 156.66,137.39 164.02,142.00 "
             + "168.33,144.70 175.90,145.30 181.00,145.68 "
             + "190.06,146.36 214.18,141.83 222.00,137.24 "
             + "226.52,134.59 232.43,131.15 231.19,125.00 "
             + "230.10,119.63 224.65,117.34 220.00,115.70 "
             + "212.73,113.13 192.17,113.52 184.00,114.28 "
             + "175.79,115.47 168.68,115.39 162.13,121.47 Z "
           + "M 315.00,123.64 "
           + "C 313.34,124.84 311.71,126.35 310.51,128.02 "
             + "300.26,142.23 325.59,152.88 326.98,164.00 "
             + "327.79,170.52 318.15,175.30 315.64,184.00 "
             + "314.20,188.98 314.10,195.85 321.00,195.35 "
             + "327.55,194.88 342.00,189.58 348.00,186.63 "
             + "348.00,186.63 360.00,180.17 360.00,180.17 "
             + "364.29,178.29 372.34,175.96 377.00,174.89 "
             + "377.00,174.89 394.72,172.40 394.72,172.40 "
             + "395.93,171.84 396.58,171.09 397.07,169.85 "
             + "400.32,161.73 390.58,151.04 385.00,146.46 "
             + "375.47,138.65 368.31,136.07 358.00,130.60 "
             + "344.98,123.69 347.84,122.45 331.83,121.09 "
             + "327.54,120.73 326.65,119.97 322.00,120.40 "
             + "319.21,121.22 317.41,121.90 315.00,123.64 Z "
           + "M 298.26,164.91 "
           + "C 302.30,158.90 298.00,148.53 292.96,144.39 "
             + "284.98,137.83 269.92,137.59 260.00,136.91 "
             + "260.00,136.91 248.00,136.01 248.00,136.01 "
             + "242.49,136.14 231.56,138.10 227.04,141.13 "
             + "220.92,145.24 217.87,154.45 222.15,160.91 "
             + "227.67,169.26 244.44,173.56 254.00,174.00 "
             + "244.83,184.57 237.06,170.07 229.02,170.28 "
             + "223.35,170.42 222.34,177.54 230.02,180.87 "
             + "234.74,182.92 235.87,181.93 240.00,186.00 "
             + "240.00,186.00 224.00,181.00 224.00,181.00 "
             + "224.26,183.27 224.31,184.84 225.74,186.79 "
             + "229.88,192.46 244.26,195.35 251.00,196.15 "
             + "253.99,196.51 261.87,198.43 263.34,194.70 "
             + "265.98,188.05 253.57,189.49 251.11,188.84 "
             + "249.37,188.39 249.27,188.00 248.00,187.00 "
             + "248.00,187.00 265.00,188.00 265.00,188.00 "
             + "267.95,187.96 275.29,187.34 271.96,182.31 "
             + "270.09,179.49 266.72,181.09 264.04,180.48 "
             + "260.76,179.74 260.03,177.84 259.00,175.00 "
             + "264.08,174.89 270.76,173.08 274.13,178.14 "
             + "276.67,181.95 274.11,185.98 277.33,187.64 "
             + "279.66,188.85 283.77,186.92 286.00,185.99 "
             + "295.28,182.08 299.90,179.41 300.00,169.00 "
             + "289.02,171.24 286.33,181.20 281.00,173.00 "
             + "287.18,172.70 294.62,170.33 298.26,164.91 Z "
           + "M 96.15,156.01 "
           + "C 87.32,162.23 101.20,171.81 104.20,177.04 "
             + "108.55,184.63 108.08,188.95 115.04,197.91 "
             + "117.58,201.18 119.86,202.53 123.00,205.09 "
             + "136.23,215.89 137.47,215.60 153.00,221.99 "
             + "158.24,224.15 167.51,227.42 173.00,228.32 "
             + "175.14,228.67 180.87,228.19 178.83,224.57 "
             + "177.92,222.94 173.75,222.32 172.00,221.85 "
             + "166.41,220.34 158.20,217.87 153.00,215.56 "
             + "132.62,206.53 123.13,199.90 114.15,179.00 "
             + "112.56,175.29 110.99,171.97 110.04,168.00 "
             + "108.30,160.75 110.38,153.56 100.00,154.41 "
             + "98.45,154.90 97.57,155.00 96.15,156.01 Z "
           + "M 121.73,157.43 "
           + "C 119.88,154.23 113.61,154.82 111.74,159.13 "
             + "109.51,164.28 114.70,178.93 117.03,184.00 "
             + "121.89,194.61 134.26,206.16 145.00,210.65 "
             + "145.00,210.65 154.00,213.44 154.00,213.44 "
             + "161.19,216.00 160.90,216.46 169.00,218.21 "
             + "178.08,220.18 182.79,222.83 192.00,219.00 "
             + "191.60,217.31 191.27,215.61 190.44,214.06 "
             + "186.03,205.77 180.05,214.22 170.00,211.83 "
             + "163.27,210.23 145.46,202.28 140.00,198.37 "
             + "136.60,195.93 130.21,189.31 127.44,186.00 "
             + "122.13,179.67 117.25,173.26 121.00,165.00 "
             + "121.01,167.69 120.89,170.39 121.63,173.00 "
             + "124.00,181.32 132.31,191.85 139.17,196.90 "
             + "148.10,203.47 166.76,210.61 178.00,209.96 "
             + "180.84,209.79 186.18,208.32 182.58,204.63 "
             + "178.98,200.95 171.70,202.47 167.00,201.68 "
             + "161.35,200.73 152.71,195.74 148.00,192.43 "
             + "143.79,189.48 132.39,178.50 130.86,174.00 "
             + "129.17,169.62 133.24,165.95 130.86,162.43 "
             + "128.02,157.89 123.53,161.42 121.00,164.00 "
             + "121.80,161.96 122.98,159.58 121.73,157.43 Z "
           + "M 152.10,176.67 "
           + "C 158.84,182.84 169.31,184.07 178.00,182.38 "
             + "187.71,180.50 192.97,170.80 184.81,163.76 "
             + "177.35,157.32 165.59,155.09 156.00,156.39 "
            + "145.47,159.80 144.27,169.51 152.10,176.67 Z "
           + "M 254.98,205.88 "
           + "C 258.09,205.60 261.87,202.83 258.40,200.01 "
             + "256.73,198.66 248.57,198.03 246.00,197.54 "
             + "239.42,196.28 231.56,192.89 226.09,189.04 "
             + "223.05,186.90 219.16,182.14 217.13,179.00 "
             + "215.86,177.05 214.22,173.02 211.87,172.34 "
             + "208.57,171.37 206.48,175.33 206.16,178.00 "
             + "204.70,190.48 221.35,192.00 226.00,200.00 "
             + "219.61,198.13 219.34,196.59 216.00,195.33 "
             + "210.92,193.41 209.16,197.78 212.43,201.82 "
             + "216.16,206.41 233.86,215.84 239.58,211.98 "
             + "241.21,210.88 241.38,209.67 242.00,208.00 "
             + "242.00,208.00 237.00,203.00 237.00,203.00 "
             + "237.00,203.00 254.98,205.88 254.98,205.88 Z "
           + "M 91.73,183.34 "
           + "C 94.58,182.31 97.09,175.65 90.09,174.66 "
             + "83.04,177.33 87.12,185.02 91.73,183.34 Z "
           + "M 106.26,185.00 "
           + "C 103.72,179.79 104.12,176.07 98.00,175.00 "
             + "98.16,181.92 103.67,197.57 110.17,200.89 "
             + "112.16,201.76 113.04,201.33 115.00,200.89 "
             + "115.00,200.89 106.26,185.00 106.26,185.00 Z "
           + "M 302.98,194.56 "
           + "C 306.23,192.38 308.72,190.23 308.84,186.02 "
             + "308.88,184.22 308.31,181.62 306.04,181.61 "
             + "302.81,181.59 302.02,186.50 294.99,191.56 "
             + "289.21,195.72 282.94,197.70 276.00,198.92 "
             + "273.65,199.33 265.74,200.07 264.31,201.02 "
             + "261.91,202.63 262.09,205.46 262.00,208.00 "
             + "262.00,208.00 285.00,205.00 285.00,205.00 "
             + "285.00,205.00 285.00,207.00 285.00,207.00 "
             + "281.79,208.07 274.77,209.97 273.40,213.31 "
             + "271.25,218.56 279.34,217.89 282.00,217.33 "
             + "289.95,215.65 306.45,207.96 309.12,200.00 "
             + "310.09,197.61 309.59,196.29 309.12,194.00 "
             + "309.12,194.00 293.00,204.00 293.00,204.00 "
             + "293.00,204.00 292.00,203.00 292.00,203.00 "
             + "296.39,198.10 297.88,197.99 302.98,194.56 Z "
           + "M 282.00,189.56 "
           + "C 275.06,191.68 271.62,190.52 269.15,191.60 "
             + "266.50,192.75 266.42,194.51 266.00,196.81 "
             + "269.11,197.00 276.34,197.19 279.00,196.81 "
             + "284.78,195.36 296.01,188.50 301.00,185.00 "
             + "301.00,185.00 301.00,183.00 301.00,183.00 "
             + "293.38,181.55 289.27,187.33 282.00,189.56 Z "
           + "M 358.00,203.69 "
           + "C 351.80,207.10 344.17,209.51 339.10,214.30 "
             + "329.10,223.75 337.85,232.74 349.00,232.82 "
             + "355.12,232.86 362.63,229.44 368.00,226.75 "
             + "380.13,220.69 386.85,217.43 396.94,207.72 "
             + "399.66,205.10 400.53,203.71 401.22,200.00 "
             + "402.84,191.31 396.36,188.89 389.00,188.46 "
             + "378.17,189.47 367.44,198.50 358.00,203.69 Z "
           + "M 110.09,203.00 "
           + "C 105.65,198.21 104.40,193.44 98.00,192.00 "
             + "98.43,194.32 98.97,197.93 99.92,200.00 "
             + "103.06,206.88 114.59,216.48 121.00,220.66 "
             + "125.84,223.81 130.08,227.26 136.00,226.00 "
             + "136.00,226.00 131.00,220.00 131.00,220.00 "
             + "138.59,225.36 145.10,228.14 154.00,230.82 "
             + "156.10,231.45 162.62,232.75 161.26,228.22 "
             + "160.40,225.36 151.79,223.27 149.00,222.19 "
             + "141.98,219.47 135.05,215.73 129.00,211.24 "
             + "123.24,206.96 122.35,204.17 115.00,202.00 "
             + "117.25,211.45 122.95,213.88 130.00,220.00 "
             + "121.45,213.17 118.07,211.61 110.09,203.00 Z "
           + "M 248.06,216.26 "
           + "C 251.69,217.80 261.06,218.09 264.96,216.94 "
             + "267.34,216.24 271.20,213.59 268.22,210.99 "
             + "266.89,209.83 263.69,210.01 262.00,210.00 "
             + "262.00,210.00 247.15,208.90 247.15,208.90 "
             + "243.19,211.17 244.09,214.58 248.06,216.26 Z "
           + "M 183.17,226.57 "
           + "C 180.79,230.83 190.44,232.86 194.98,231.69 "
             + "200.28,230.31 202.96,221.91 194.00,222.40 "
             + "191.99,222.91 184.06,224.96 183.17,226.57 Z "
           + "M 264.43,226.84 "
           + "C 259.72,230.86 262.01,241.62 275.00,241.98 "
             + "278.11,242.07 282.19,242.22 284.77,240.26 "
             + "290.04,236.28 287.84,228.95 282.96,225.74 "
             + "279.52,223.47 274.89,223.90 271.00,224.32 "
             + "268.77,224.83 266.23,225.31 264.43,226.84 Z "
           + "M 161.00,236.76 "
           + "C 165.29,243.24 170.06,233.43 162.94,233.46 "
             + "162.94,233.46 160.00,234.00 160.00,234.00 "
             + "160.31,234.99 160.27,235.66 161.00,236.76 Z")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }
	        else if (proteinLocalization == eukaryotaArray[eukaPos + 3]) {

	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "endoplas_euka")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 266.00,201.00 "
           + "C 266.00,201.00 270.50,199.75 270.50,199.75 "
             + "270.50,199.75 275.25,199.75 275.25,199.75 "
             + "275.25,199.75 280.00,198.50 280.00,198.50 "
             + "280.00,198.50 284.75,198.25 284.75,198.25 "
             + "284.75,198.25 289.00,195.50 289.00,195.50 "
             + "289.00,195.50 294.25,193.00 294.25,193.00 "
             + "294.25,193.00 297.50,190.75 297.50,190.75 "
             + "297.50,190.75 301.00,187.75 301.00,187.75 "
             + "301.00,187.75 303.00,185.25 303.00,185.25 "
             + "303.00,185.25 304.50,181.25 304.50,181.25 "
             + "304.50,181.25 307.50,181.50 307.50,181.50 "
             + "307.50,181.50 308.75,183.00 308.75,183.00 "
             + "308.75,183.00 308.75,185.50 308.75,185.50 "
             + "308.75,185.50 308.75,187.75 308.75,187.75 "
             + "308.75,187.75 307.50,190.00 307.50,190.00 "
             + "307.50,190.00 305.00,191.50 305.00,191.50 "
             + "305.00,191.50 302.50,193.75 302.50,193.75 "
             + "302.50,193.75 300.00,195.50 300.00,195.50 "
             + "300.00,195.50 296.75,197.50 296.75,197.50 "
             + "296.75,197.50 294.25,199.75 294.25,199.75 "
             + "294.25,199.75 291.75,201.50 291.75,201.50 "
             + "291.75,201.50 292.25,204.00 292.25,204.00 "
             + "292.25,204.00 295.25,204.50 295.25,204.50 "
             + "295.25,204.50 297.75,202.50 297.75,202.50 "
             + "297.75,202.50 301.50,199.50 301.50,199.50 "
             + "301.50,199.50 304.75,196.00 304.75,196.00 "
             + "304.75,196.00 307.00,194.25 307.00,194.25 "
             + "307.00,194.25 309.50,194.75 309.50,194.75 "
             + "309.50,194.75 310.75,197.25 310.75,197.25 "
             + "310.75,197.25 309.50,199.25 309.50,199.25 "
             + "309.50,199.25 307.25,203.00 307.25,203.00 "
             + "307.25,203.00 303.00,207.00 303.00,207.00 "
             + "303.00,207.00 298.50,209.75 298.50,209.75 "
             + "298.50,209.75 293.50,212.25 293.50,212.25 "
             + "293.50,212.25 286.75,215.75 286.75,215.75 "
             + "286.75,215.75 282.50,217.50 282.50,217.50 "
             + "282.50,217.50 279.25,218.50 279.25,218.50 "
             + "279.25,218.50 276.25,217.50 276.25,217.50 "
             + "276.25,217.50 273.75,216.25 273.75,216.25 "
             + "273.75,216.25 273.75,213.75 273.75,213.75 "
             + "273.75,213.75 275.75,212.00 275.75,212.00 "
             + "275.75,212.00 278.50,210.50 278.50,210.50 "
             + "278.50,210.50 282.00,208.75 282.00,208.75 "
             + "282.00,208.75 285.25,207.50 285.25,207.50 "
             + "285.25,207.50 285.25,205.50 285.25,205.50 "
             + "285.25,205.50 284.25,204.00 284.25,204.00 "
             + "284.25,204.00 281.75,203.50 281.75,203.50 "
             + "281.75,203.50 278.50,204.00 278.50,204.00 "
             + "278.50,204.00 275.00,205.50 275.00,205.50 "
             + "275.00,205.50 270.75,207.00 270.75,207.00 "
             + "270.75,207.00 266.50,207.50 266.50,207.50 "
             + "266.50,207.50 263.50,207.25 263.50,207.25 "
             + "263.50,207.25 262.25,204.25 262.25,204.25 "
             + "262.25,204.25 263.50,202.00 263.50,202.00Z M 270.75,191.50 "
           + "C 270.75,191.50 275.00,191.25 275.00,191.25 "
             + "275.00,191.25 279.25,190.75 279.25,190.75 "
             + "279.25,190.75 282.50,189.50 282.50,189.50 "
             + "282.50,189.50 287.50,187.50 287.50,187.50 "
             + "287.50,187.50 291.25,185.25 291.25,185.25 "
             + "291.25,185.25 295.00,182.75 295.00,182.75 "
             + "295.00,182.75 298.25,182.75 298.25,182.75 "
             + "298.25,182.75 300.25,183.50 300.25,183.50 "
             + "300.25,183.50 298.50,185.75 298.50,185.75 "
             + "298.50,185.75 295.50,188.50 295.50,188.50 "
             + "295.50,188.50 292.25,190.50 292.25,190.50 "
             + "292.25,190.50 286.50,193.75 286.50,193.75 "
             + "286.50,193.75 280.50,196.25 280.50,196.25 "
             + "280.50,196.25 276.50,197.00 276.50,197.00 "
             + "276.50,197.00 271.25,197.00 271.25,197.00 "
             + "271.25,197.00 267.50,196.50 267.50,196.50 "
             + "267.50,196.50 266.00,194.50 266.00,194.50 "
             + "266.00,194.50 267.00,191.50 267.00,191.50Z M 249.50,209.50 "
           + "C 249.50,209.50 253.75,209.50 253.75,209.50 "
             + "253.75,209.50 257.00,210.00 257.00,210.00 "
             + "257.00,210.00 260.50,210.00 260.50,210.00 "
             + "260.50,210.00 264.50,210.25 264.50,210.25 "
             + "264.50,210.25 268.00,210.50 268.00,210.50 "
             + "268.00,210.50 269.25,211.75 269.25,211.75 "
             + "269.25,211.75 269.75,213.50 269.75,213.50 "
             + "269.75,213.50 269.25,215.00 269.25,215.00 "
             + "269.25,215.00 266.50,216.50 266.50,216.50 "
             + "266.50,216.50 259.25,217.00 259.25,217.00 "
             + "259.25,217.00 251.50,217.00 251.50,217.00 "
             + "251.50,217.00 248.25,216.25 248.25,216.25 "
             + "248.25,216.25 245.50,215.00 245.50,215.00 "
             + "245.50,215.00 244.75,213.00 244.75,213.00 "
             + "244.75,213.00 244.75,211.25 244.75,211.25 "
             + "244.75,211.25 246.50,208.75 246.50,208.75Z M 223.50,208.00 "
           + "C 223.50,208.00 219.50,205.25 219.50,205.25 "
             + "219.50,205.25 214.50,202.25 214.50,202.25 "
             + "214.50,202.25 210.75,198.75 210.75,198.75 "
             + "210.75,198.75 210.75,196.00 210.75,196.00 "
             + "210.75,196.00 213.75,195.00 213.75,195.00 "
             + "213.75,195.00 216.50,196.00 216.50,196.00 "
             + "216.50,196.00 218.75,198.00 218.75,198.00 "
             + "218.75,198.00 221.00,199.75 221.00,199.75 "
             + "221.00,199.75 223.75,201.25 223.75,201.25 "
             + "223.75,201.25 226.50,201.00 226.50,201.00 "
             + "226.50,201.00 227.00,198.75 227.00,198.75 "
             + "227.00,198.75 225.00,196.25 225.00,196.25 "
             + "225.00,196.25 221.50,194.25 221.50,194.25 "
             + "221.50,194.25 218.75,192.25 218.75,192.25 "
             + "218.75,192.25 214.50,189.75 214.50,189.75 "
             + "214.50,189.75 210.25,186.50 210.25,186.50 "
             + "210.25,186.50 207.75,183.00 207.75,183.00 "
             + "207.75,183.00 206.25,178.75 206.25,178.75 "
             + "206.25,178.75 206.25,175.25 206.25,175.25 "
             + "206.25,175.25 208.50,173.00 208.50,173.00 "
             + "208.50,173.00 211.75,172.00 211.75,172.00 "
             + "211.75,172.00 213.75,173.50 213.75,173.50 "
             + "213.75,173.50 215.25,176.00 215.25,176.00 "
             + "215.25,176.00 215.75,178.25 215.75,178.25 "
             + "215.75,178.25 217.75,181.50 217.75,181.50 "
             + "217.75,181.50 220.50,184.75 220.50,184.75 "
             + "220.50,184.75 224.50,188.25 224.50,188.25 "
             + "224.50,188.25 228.25,191.25 228.25,191.25 "
             + "228.25,191.25 232.50,193.50 232.50,193.50 "
             + "232.50,193.50 236.75,195.50 236.75,195.50 "
             + "236.75,195.50 243.00,197.25 243.00,197.25 "
             + "243.00,197.25 247.75,198.00 247.75,198.00 "
             + "247.75,198.00 252.25,198.00 252.25,198.00 "
             + "252.25,198.00 256.00,199.00 256.00,199.00 "
             + "256.00,199.00 259.25,200.75 259.25,200.75 "
             + "259.25,200.75 260.00,203.75 260.00,203.75 "
             + "260.00,203.75 258.00,205.50 258.00,205.50 "
             + "258.00,205.50 254.50,205.75 254.50,205.75 "
             + "254.50,205.75 250.50,205.00 250.50,205.00 "
             + "250.50,205.00 245.75,203.50 245.75,203.50 "
             + "245.75,203.50 242.75,202.25 242.75,202.25 "
             + "242.75,202.25 238.50,202.50 238.50,202.50 "
             + "238.50,202.50 236.25,203.00 236.25,203.00 "
             + "236.25,203.00 235.75,205.50 235.75,205.50 "
             + "235.75,205.50 237.75,206.25 237.75,206.25 "
             + "237.75,206.25 240.50,207.25 240.50,207.25 "
             + "240.50,207.25 242.00,209.75 242.00,209.75 "
             + "242.00,209.75 239.75,212.25 239.75,212.25 "
             + "239.75,212.25 236.25,212.50 236.25,212.50 "
             + "236.25,212.50 232.75,212.25 232.75,212.25 "
             + "232.75,212.25 227.25,210.00 227.25,210.00Z M 275.25,173.50 "
           + "C 275.25,173.50 279.00,172.75 279.00,172.75 "
             + "279.00,172.75 280.75,175.00 280.75,175.00 "
             + "280.75,175.00 282.00,177.00 282.00,177.00 "
             + "282.00,177.00 284.25,178.50 284.25,178.50 "
             + "284.25,178.50 287.25,177.25 287.25,177.25 "
             + "287.25,177.25 290.00,174.75 290.00,174.75 "
             + "290.00,174.75 293.75,172.50 293.75,172.50 "
             + "293.75,172.50 297.25,170.25 297.25,170.25 "
             + "297.25,170.25 300.25,171.25 300.25,171.25 "
             + "300.25,171.25 300.25,173.50 300.25,173.50 "
             + "300.25,173.50 299.00,175.50 299.00,175.50 "
             + "299.00,175.50 297.75,177.50 297.75,177.50 "
             + "297.75,177.50 295.50,179.50 295.50,179.50 "
             + "295.50,179.50 292.75,181.50 292.75,181.50 "
             + "292.75,181.50 290.00,183.00 290.00,183.00 "
             + "290.00,183.00 287.75,184.25 287.75,184.25 "
             + "287.75,184.25 285.00,185.75 285.00,185.75 "
             + "285.00,185.75 282.25,186.75 282.25,186.75 "
             + "282.25,186.75 279.00,187.25 279.00,187.25 "
             + "279.00,187.25 275.75,187.25 275.75,187.25 "
             + "275.75,187.25 275.75,184.75 275.75,184.75 "
             + "275.75,184.75 277.25,182.50 277.25,182.50 "
             + "277.25,182.50 276.50,179.75 276.50,179.75 "
             + "276.50,179.75 275.00,177.25 275.00,177.25 "
             + "275.00,177.25 273.25,174.25 273.25,174.25 "
             + "273.25,174.25 271.00,173.00 271.00,173.00 "
             + "271.00,173.00 268.00,173.25 268.00,173.25 "
             + "268.00,173.25 265.00,173.25 265.00,173.25 "
             + "265.00,173.25 261.75,173.25 261.75,173.25 "
             + "261.75,173.25 259.25,173.25 259.25,173.25 "
             + "259.25,173.25 258.50,175.50 258.50,175.50 "
             + "258.50,175.50 258.75,177.50 258.75,177.50 "
             + "258.75,177.50 259.00,179.50 259.00,179.50 "
             + "259.00,179.50 260.75,181.00 260.75,181.00 "
             + "260.75,181.00 262.75,181.00 262.75,181.00 "
             + "262.75,181.00 265.00,181.25 265.00,181.25 "
             + "265.00,181.25 266.75,180.75 266.75,180.75 "
             + "266.75,180.75 269.50,181.00 269.50,181.00 "
             + "269.50,181.00 271.50,181.50 271.50,181.50 "
             + "271.50,181.50 272.25,184.00 272.25,184.00 "
             + "272.25,184.00 272.00,185.75 272.00,185.75 "
             + "272.00,185.75 270.25,187.00 270.25,187.00 "
             + "270.25,187.00 267.00,187.25 267.00,187.25 "
             + "267.00,187.25 264.00,187.50 264.00,187.50 "
             + "264.00,187.50 260.50,187.50 260.50,187.50 "
             + "260.50,187.50 257.00,187.00 257.00,187.00 "
             + "257.00,187.00 253.50,187.25 253.50,187.25 "
             + "253.50,187.25 250.00,186.75 250.00,186.75 "
             + "250.00,186.75 247.50,187.50 247.50,187.50 "
             + "247.50,187.50 247.75,189.25 247.75,189.25 "
             + "247.75,189.25 250.00,189.75 250.00,189.75 "
             + "250.00,189.75 252.75,190.00 252.75,190.00 "
             + "252.75,190.00 255.50,190.00 255.50,190.00 "
             + "255.50,190.00 258.50,190.00 258.50,190.00 "
             + "258.50,190.00 260.75,190.50 260.75,190.50 "
             + "260.75,190.50 263.25,191.75 263.25,191.75 "
             + "263.25,191.75 264.00,193.25 264.00,193.25 "
             + "264.00,193.25 264.00,195.00 264.00,195.00 "
             + "264.00,195.00 262.25,196.00 262.25,196.00 "
             + "262.25,196.00 258.75,196.50 258.75,196.50 "
             + "258.75,196.50 254.75,196.50 254.75,196.50 "
             + "254.75,196.50 251.25,195.00 251.25,195.00 "
             + "251.25,195.00 247.00,195.00 247.00,195.00 "
             + "247.00,195.00 243.25,194.00 243.25,194.00 "
             + "243.25,194.00 239.00,192.25 239.00,192.25 "
             + "239.00,192.25 234.50,191.25 234.50,191.25 "
             + "234.50,191.25 230.25,189.50 230.25,189.50 "
             + "230.25,189.50 226.75,187.25 226.75,187.25 "
             + "226.75,187.25 225.50,184.75 225.50,184.75 "
             + "225.50,184.75 227.75,182.50 227.75,182.50 "
             + "227.75,182.50 231.00,183.50 231.00,183.50 "
             + "231.00,183.50 233.50,184.00 233.50,184.00 "
             + "233.50,184.00 236.75,185.75 236.75,185.75 "
             + "236.75,185.75 239.75,185.75 239.75,185.75 "
             + "239.75,185.75 240.50,183.25 240.50,183.25 "
             + "240.50,183.25 237.50,182.25 237.50,182.25 "
             + "237.50,182.25 234.25,181.00 234.25,181.00 "
             + "234.25,181.00 231.00,180.50 231.00,180.50 "
             + "231.00,180.50 228.50,179.00 228.50,179.00 "
             + "228.50,179.00 226.25,177.50 226.25,177.50 "
             + "226.25,177.50 225.00,174.75 225.00,174.75 "
             + "225.00,174.75 224.75,171.75 224.75,171.75 "
             + "224.75,171.75 226.75,170.00 226.75,170.00 "
             + "226.75,170.00 229.75,171.00 229.75,171.00 "
             + "229.75,171.00 232.50,172.00 232.50,172.00 "
             + "232.50,172.00 234.75,173.50 234.75,173.50 "
             + "234.75,173.50 237.25,175.00 237.25,175.00 "
             + "237.25,175.00 239.50,176.00 239.50,176.00 "
             + "239.50,176.00 242.00,178.00 242.00,178.00 "
             + "242.00,178.00 244.00,179.00 244.00,179.00 "
             + "244.00,179.00 247.00,179.25 247.00,179.25 "
             + "247.00,179.25 250.00,179.50 250.00,179.50 "
             + "250.00,179.50 252.50,179.25 252.50,179.25 "
             + "252.50,179.25 253.75,176.50 253.75,176.50 "
             + "253.75,176.50 253.75,173.50 253.75,173.50 "
             + "253.75,173.50 256.50,173.50 256.50,173.50Z M 367.25,172.75Z ")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");
	        }
	        else if (proteinLocalization == eukaryotaArray[eukaPos + 4]) {

	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "endoplasmicMem_euka")
				  .attr("fill", "none")
				  .attr("stroke", colorCellCompartment)
				  .attr("stroke-width", "3")
				  .attr("d", "M 266.00,201.00 "
           + "C 266.00,201.00 270.50,199.75 270.50,199.75 "
             + "270.50,199.75 275.25,199.75 275.25,199.75 "
             + "275.25,199.75 280.00,198.50 280.00,198.50 "
             + "280.00,198.50 284.75,198.25 284.75,198.25 "
             + "284.75,198.25 289.00,195.50 289.00,195.50 "
             + "289.00,195.50 294.25,193.00 294.25,193.00 "
             + "294.25,193.00 297.50,190.75 297.50,190.75 "
             + "297.50,190.75 301.00,187.75 301.00,187.75 "
             + "301.00,187.75 303.00,185.25 303.00,185.25 "
             + "303.00,185.25 304.50,181.25 304.50,181.25 "
             + "304.50,181.25 307.50,181.50 307.50,181.50 "
             + "307.50,181.50 308.75,183.00 308.75,183.00 "
             + "308.75,183.00 308.75,185.50 308.75,185.50 "
             + "308.75,185.50 308.75,187.75 308.75,187.75 "
             + "308.75,187.75 307.50,190.00 307.50,190.00 "
             + "307.50,190.00 305.00,191.50 305.00,191.50 "
             + "305.00,191.50 302.50,193.75 302.50,193.75 "
             + "302.50,193.75 300.00,195.50 300.00,195.50 "
             + "300.00,195.50 296.75,197.50 296.75,197.50 "
             + "296.75,197.50 294.25,199.75 294.25,199.75 "
             + "294.25,199.75 291.75,201.50 291.75,201.50 "
             + "291.75,201.50 292.25,204.00 292.25,204.00 "
             + "292.25,204.00 295.25,204.50 295.25,204.50 "
             + "295.25,204.50 297.75,202.50 297.75,202.50 "
             + "297.75,202.50 301.50,199.50 301.50,199.50 "
             + "301.50,199.50 304.75,196.00 304.75,196.00 "
             + "304.75,196.00 307.00,194.25 307.00,194.25 "
             + "307.00,194.25 309.50,194.75 309.50,194.75 "
             + "309.50,194.75 310.75,197.25 310.75,197.25 "
             + "310.75,197.25 309.50,199.25 309.50,199.25 "
             + "309.50,199.25 307.25,203.00 307.25,203.00 "
             + "307.25,203.00 303.00,207.00 303.00,207.00 "
             + "303.00,207.00 298.50,209.75 298.50,209.75 "
             + "298.50,209.75 293.50,212.25 293.50,212.25 "
             + "293.50,212.25 286.75,215.75 286.75,215.75 "
             + "286.75,215.75 282.50,217.50 282.50,217.50 "
             + "282.50,217.50 279.25,218.50 279.25,218.50 "
             + "279.25,218.50 276.25,217.50 276.25,217.50 "
             + "276.25,217.50 273.75,216.25 273.75,216.25 "
             + "273.75,216.25 273.75,213.75 273.75,213.75 "
             + "273.75,213.75 275.75,212.00 275.75,212.00 "
             + "275.75,212.00 278.50,210.50 278.50,210.50 "
             + "278.50,210.50 282.00,208.75 282.00,208.75 "
             + "282.00,208.75 285.25,207.50 285.25,207.50 "
             + "285.25,207.50 285.25,205.50 285.25,205.50 "
             + "285.25,205.50 284.25,204.00 284.25,204.00 "
             + "284.25,204.00 281.75,203.50 281.75,203.50 "
             + "281.75,203.50 278.50,204.00 278.50,204.00 "
             + "278.50,204.00 275.00,205.50 275.00,205.50 "
             + "275.00,205.50 270.75,207.00 270.75,207.00 "
             + "270.75,207.00 266.50,207.50 266.50,207.50 "
             + "266.50,207.50 263.50,207.25 263.50,207.25 "
             + "263.50,207.25 262.25,204.25 262.25,204.25 "
             + "262.25,204.25 263.50,202.00 263.50,202.00Z M 270.75,191.50 "
           + "C 270.75,191.50 275.00,191.25 275.00,191.25 "
             + "275.00,191.25 279.25,190.75 279.25,190.75 "
             + "279.25,190.75 282.50,189.50 282.50,189.50 "
             + "282.50,189.50 287.50,187.50 287.50,187.50 "
             + "287.50,187.50 291.25,185.25 291.25,185.25 "
             + "291.25,185.25 295.00,182.75 295.00,182.75 "
             + "295.00,182.75 298.25,182.75 298.25,182.75 "
             + "298.25,182.75 300.25,183.50 300.25,183.50 "
             + "300.25,183.50 298.50,185.75 298.50,185.75 "
             + "298.50,185.75 295.50,188.50 295.50,188.50 "
             + "295.50,188.50 292.25,190.50 292.25,190.50 "
             + "292.25,190.50 286.50,193.75 286.50,193.75 "
             + "286.50,193.75 280.50,196.25 280.50,196.25 "
             + "280.50,196.25 276.50,197.00 276.50,197.00 "
             + "276.50,197.00 271.25,197.00 271.25,197.00 "
             + "271.25,197.00 267.50,196.50 267.50,196.50 "
             + "267.50,196.50 266.00,194.50 266.00,194.50 "
             + "266.00,194.50 267.00,191.50 267.00,191.50Z M 249.50,209.50 "
           + "C 249.50,209.50 253.75,209.50 253.75,209.50 "
             + "253.75,209.50 257.00,210.00 257.00,210.00 "
             + "257.00,210.00 260.50,210.00 260.50,210.00 "
             + "260.50,210.00 264.50,210.25 264.50,210.25 "
             + "264.50,210.25 268.00,210.50 268.00,210.50 "
             + "268.00,210.50 269.25,211.75 269.25,211.75 "
             + "269.25,211.75 269.75,213.50 269.75,213.50 "
             + "269.75,213.50 269.25,215.00 269.25,215.00 "
             + "269.25,215.00 266.50,216.50 266.50,216.50 "
             + "266.50,216.50 259.25,217.00 259.25,217.00 "
             + "259.25,217.00 251.50,217.00 251.50,217.00 "
             + "251.50,217.00 248.25,216.25 248.25,216.25 "
             + "248.25,216.25 245.50,215.00 245.50,215.00 "
             + "245.50,215.00 244.75,213.00 244.75,213.00 "
             + "244.75,213.00 244.75,211.25 244.75,211.25 "
             + "244.75,211.25 246.50,208.75 246.50,208.75Z M 223.50,208.00 "
           + "C 223.50,208.00 219.50,205.25 219.50,205.25 "
             + "219.50,205.25 214.50,202.25 214.50,202.25 "
             + "214.50,202.25 210.75,198.75 210.75,198.75 "
             + "210.75,198.75 210.75,196.00 210.75,196.00 "
             + "210.75,196.00 213.75,195.00 213.75,195.00 "
             + "213.75,195.00 216.50,196.00 216.50,196.00 "
             + "216.50,196.00 218.75,198.00 218.75,198.00 "
             + "218.75,198.00 221.00,199.75 221.00,199.75 "
             + "221.00,199.75 223.75,201.25 223.75,201.25 "
             + "223.75,201.25 226.50,201.00 226.50,201.00 "
             + "226.50,201.00 227.00,198.75 227.00,198.75 "
             + "227.00,198.75 225.00,196.25 225.00,196.25 "
             + "225.00,196.25 221.50,194.25 221.50,194.25 "
             + "221.50,194.25 218.75,192.25 218.75,192.25 "
             + "218.75,192.25 214.50,189.75 214.50,189.75 "
             + "214.50,189.75 210.25,186.50 210.25,186.50 "
             + "210.25,186.50 207.75,183.00 207.75,183.00 "
             + "207.75,183.00 206.25,178.75 206.25,178.75 "
             + "206.25,178.75 206.25,175.25 206.25,175.25 "
             + "206.25,175.25 208.50,173.00 208.50,173.00 "
             + "208.50,173.00 211.75,172.00 211.75,172.00 "
             + "211.75,172.00 213.75,173.50 213.75,173.50 "
             + "213.75,173.50 215.25,176.00 215.25,176.00 "
             + "215.25,176.00 215.75,178.25 215.75,178.25 "
             + "215.75,178.25 217.75,181.50 217.75,181.50 "
             + "217.75,181.50 220.50,184.75 220.50,184.75 "
             + "220.50,184.75 224.50,188.25 224.50,188.25 "
             + "224.50,188.25 228.25,191.25 228.25,191.25 "
             + "228.25,191.25 232.50,193.50 232.50,193.50 "
             + "232.50,193.50 236.75,195.50 236.75,195.50 "
             + "236.75,195.50 243.00,197.25 243.00,197.25 "
             + "243.00,197.25 247.75,198.00 247.75,198.00 "
             + "247.75,198.00 252.25,198.00 252.25,198.00 "
             + "252.25,198.00 256.00,199.00 256.00,199.00 "
             + "256.00,199.00 259.25,200.75 259.25,200.75 "
             + "259.25,200.75 260.00,203.75 260.00,203.75 "
             + "260.00,203.75 258.00,205.50 258.00,205.50 "
             + "258.00,205.50 254.50,205.75 254.50,205.75 "
             + "254.50,205.75 250.50,205.00 250.50,205.00 "
             + "250.50,205.00 245.75,203.50 245.75,203.50 "
             + "245.75,203.50 242.75,202.25 242.75,202.25 "
             + "242.75,202.25 238.50,202.50 238.50,202.50 "
             + "238.50,202.50 236.25,203.00 236.25,203.00 "
             + "236.25,203.00 235.75,205.50 235.75,205.50 "
             + "235.75,205.50 237.75,206.25 237.75,206.25 "
             + "237.75,206.25 240.50,207.25 240.50,207.25 "
             + "240.50,207.25 242.00,209.75 242.00,209.75 "
             + "242.00,209.75 239.75,212.25 239.75,212.25 "
             + "239.75,212.25 236.25,212.50 236.25,212.50 "
             + "236.25,212.50 232.75,212.25 232.75,212.25 "
             + "232.75,212.25 227.25,210.00 227.25,210.00Z M 275.25,173.50 "
           + "C 275.25,173.50 279.00,172.75 279.00,172.75 "
             + "279.00,172.75 280.75,175.00 280.75,175.00 "
             + "280.75,175.00 282.00,177.00 282.00,177.00 "
             + "282.00,177.00 284.25,178.50 284.25,178.50 "
             + "284.25,178.50 287.25,177.25 287.25,177.25 "
             + "287.25,177.25 290.00,174.75 290.00,174.75 "
             + "290.00,174.75 293.75,172.50 293.75,172.50 "
             + "293.75,172.50 297.25,170.25 297.25,170.25 "
             + "297.25,170.25 300.25,171.25 300.25,171.25 "
             + "300.25,171.25 300.25,173.50 300.25,173.50 "
             + "300.25,173.50 299.00,175.50 299.00,175.50 "
             + "299.00,175.50 297.75,177.50 297.75,177.50 "
             + "297.75,177.50 295.50,179.50 295.50,179.50 "
             + "295.50,179.50 292.75,181.50 292.75,181.50 "
             + "292.75,181.50 290.00,183.00 290.00,183.00 "
             + "290.00,183.00 287.75,184.25 287.75,184.25 "
             + "287.75,184.25 285.00,185.75 285.00,185.75 "
             + "285.00,185.75 282.25,186.75 282.25,186.75 "
             + "282.25,186.75 279.00,187.25 279.00,187.25 "
             + "279.00,187.25 275.75,187.25 275.75,187.25 "
             + "275.75,187.25 275.75,184.75 275.75,184.75 "
             + "275.75,184.75 277.25,182.50 277.25,182.50 "
             + "277.25,182.50 276.50,179.75 276.50,179.75 "
             + "276.50,179.75 275.00,177.25 275.00,177.25 "
             + "275.00,177.25 273.25,174.25 273.25,174.25 "
             + "273.25,174.25 271.00,173.00 271.00,173.00 "
             + "271.00,173.00 268.00,173.25 268.00,173.25 "
             + "268.00,173.25 265.00,173.25 265.00,173.25 "
             + "265.00,173.25 261.75,173.25 261.75,173.25 "
             + "261.75,173.25 259.25,173.25 259.25,173.25 "
             + "259.25,173.25 258.50,175.50 258.50,175.50 "
             + "258.50,175.50 258.75,177.50 258.75,177.50 "
             + "258.75,177.50 259.00,179.50 259.00,179.50 "
             + "259.00,179.50 260.75,181.00 260.75,181.00 "
             + "260.75,181.00 262.75,181.00 262.75,181.00 "
             + "262.75,181.00 265.00,181.25 265.00,181.25 "
             + "265.00,181.25 266.75,180.75 266.75,180.75 "
             + "266.75,180.75 269.50,181.00 269.50,181.00 "
             + "269.50,181.00 271.50,181.50 271.50,181.50 "
             + "271.50,181.50 272.25,184.00 272.25,184.00 "
             + "272.25,184.00 272.00,185.75 272.00,185.75 "
             + "272.00,185.75 270.25,187.00 270.25,187.00 "
             + "270.25,187.00 267.00,187.25 267.00,187.25 "
             + "267.00,187.25 264.00,187.50 264.00,187.50 "
             + "264.00,187.50 260.50,187.50 260.50,187.50 "
             + "260.50,187.50 257.00,187.00 257.00,187.00 "
             + "257.00,187.00 253.50,187.25 253.50,187.25 "
             + "253.50,187.25 250.00,186.75 250.00,186.75 "
             + "250.00,186.75 247.50,187.50 247.50,187.50 "
             + "247.50,187.50 247.75,189.25 247.75,189.25 "
             + "247.75,189.25 250.00,189.75 250.00,189.75 "
             + "250.00,189.75 252.75,190.00 252.75,190.00 "
             + "252.75,190.00 255.50,190.00 255.50,190.00 "
             + "255.50,190.00 258.50,190.00 258.50,190.00 "
             + "258.50,190.00 260.75,190.50 260.75,190.50 "
             + "260.75,190.50 263.25,191.75 263.25,191.75 "
             + "263.25,191.75 264.00,193.25 264.00,193.25 "
             + "264.00,193.25 264.00,195.00 264.00,195.00 "
             + "264.00,195.00 262.25,196.00 262.25,196.00 "
             + "262.25,196.00 258.75,196.50 258.75,196.50 "
             + "258.75,196.50 254.75,196.50 254.75,196.50 "
             + "254.75,196.50 251.25,195.00 251.25,195.00 "
             + "251.25,195.00 247.00,195.00 247.00,195.00 "
             + "247.00,195.00 243.25,194.00 243.25,194.00 "
             + "243.25,194.00 239.00,192.25 239.00,192.25 "
             + "239.00,192.25 234.50,191.25 234.50,191.25 "
             + "234.50,191.25 230.25,189.50 230.25,189.50 "
             + "230.25,189.50 226.75,187.25 226.75,187.25 "
             + "226.75,187.25 225.50,184.75 225.50,184.75 "
             + "225.50,184.75 227.75,182.50 227.75,182.50 "
             + "227.75,182.50 231.00,183.50 231.00,183.50 "
             + "231.00,183.50 233.50,184.00 233.50,184.00 "
             + "233.50,184.00 236.75,185.75 236.75,185.75 "
             + "236.75,185.75 239.75,185.75 239.75,185.75 "
             + "239.75,185.75 240.50,183.25 240.50,183.25 "
             + "240.50,183.25 237.50,182.25 237.50,182.25 "
             + "237.50,182.25 234.25,181.00 234.25,181.00 "
             + "234.25,181.00 231.00,180.50 231.00,180.50 "
             + "231.00,180.50 228.50,179.00 228.50,179.00 "
             + "228.50,179.00 226.25,177.50 226.25,177.50 "
             + "226.25,177.50 225.00,174.75 225.00,174.75 "
             + "225.00,174.75 224.75,171.75 224.75,171.75 "
             + "224.75,171.75 226.75,170.00 226.75,170.00 "
             + "226.75,170.00 229.75,171.00 229.75,171.00 "
             + "229.75,171.00 232.50,172.00 232.50,172.00 "
             + "232.50,172.00 234.75,173.50 234.75,173.50 "
             + "234.75,173.50 237.25,175.00 237.25,175.00 "
             + "237.25,175.00 239.50,176.00 239.50,176.00 "
             + "239.50,176.00 242.00,178.00 242.00,178.00 "
             + "242.00,178.00 244.00,179.00 244.00,179.00 "
             + "244.00,179.00 247.00,179.25 247.00,179.25 "
             + "247.00,179.25 250.00,179.50 250.00,179.50 "
             + "250.00,179.50 252.50,179.25 252.50,179.25 "
             + "252.50,179.25 253.75,176.50 253.75,176.50 "
             + "253.75,176.50 253.75,173.50 253.75,173.50 "
             + "253.75,173.50 256.50,173.50 256.50,173.50Z M 367.25,172.75Z ")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");
	        }
	        else if (proteinLocalization == eukaryotaArray[eukaPos + 5]) {
	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "extraCell_euka")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 136.90,2.00 "
           + "C 182.42,2.00 234.44,2.00 284.60,2.00 "
             + "307.94,2.00 330.87,2.00 352.56,2.00 "
             + "435.31,2.00 500.00,2.00 500.00,2.00 "
             + "500.00,2.00 500.00,37.28 500.00,86.83 "
             + "500.00,115.44 500.00,148.81 500.00,182.89 "
             + "500.00,227.73 500.00,273.81 500.00,311.92 "
             + "500.00,363.17 500.00,400.00 500.00,400.00 "
             + "500.00,400.00 262.00,400.00 262.00,400.00 "
             + "262.00,400.00 143.00,400.00 143.00,400.00 "
             + "143.00,400.00 128.00,399.00 128.00,399.00 "
             + "128.00,399.00 1.00,399.00 1.00,399.00 "
             + "1.00,399.00 1.00,301.00 1.00,301.00 "
             + "1.00,301.00 2.00,286.00 2.00,286.00 "
             + "2.00,286.00 2.00,222.87 2.00,156.14 "
             + "2.00,81.33 2.00,2.00 2.00,2.00 "
             + "2.00,2.00 60.25,2.00 136.90,2.00 Z "
           + "M 164.00,95.17 "
           + "C 164.00,95.17 142.00,98.53 142.00,98.53 "
             + "142.00,98.53 130.00,102.48 130.00,102.48 "
             + "123.06,103.97 120.99,101.08 106.00,109.31 "
             + "79.61,123.80 65.35,151.37 65.00,181.00 "
             + "64.77,201.21 76.18,220.66 92.00,232.76 "
             + "107.24,244.42 116.57,246.88 134.00,252.67 "
             + "142.73,255.57 158.15,260.16 167.00,261.56 "
             + "167.00,261.56 187.00,263.17 187.00,263.17 "
             + "187.00,263.17 215.00,265.09 215.00,265.09 "
             + "215.00,265.09 227.00,266.00 227.00,266.00 "
             + "227.00,266.00 259.00,266.00 259.00,266.00 "
             + "259.00,266.00 274.00,265.00 274.00,265.00 "
             + "274.00,265.00 294.00,265.00 294.00,265.00 "
             + "294.00,265.00 311.00,264.00 311.00,264.00 "
             + "311.00,264.00 322.00,264.00 322.00,264.00 "
             + "332.19,263.98 342.09,261.35 352.00,259.21 "
             + "372.94,254.69 390.21,250.75 409.00,239.55 "
             + "418.44,233.92 429.67,222.85 434.62,213.00 "
             + "448.68,185.07 435.30,147.72 413.00,128.29 "
             + "388.20,106.68 353.99,99.48 322.00,96.92 "
             + "322.00,96.92 299.00,95.00 299.00,95.00 "
             + "299.00,95.00 277.00,95.00 277.00,95.00 "
             + "277.00,95.00 262.00,94.00 262.00,94.00 "
             + "262.00,94.00 229.00,94.00 229.00,94.00 "
             + "229.00,94.00 199.00,93.28 199.00,93.28 "
             + "199.00,93.28 164.00,95.17 164.00,95.17 Z")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");
	        }
	        else if (proteinLocalization == eukaryotaArray[eukaPos + 6]) {
	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "golgi_euka")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 162.50,233.75 "
           + "C 162.50,233.75 165.50,232.75 165.50,232.75 "
             + "165.50,232.75 167.25,234.75 167.25,234.75 "
             + "167.25,234.75 167.50,237.25 167.50,237.25 "
             + "167.50,237.25 166.75,238.75 166.75,238.75 "
             + "166.75,238.75 164.00,239.00 164.00,239.00 "
             + "164.00,239.00 162.00,238.75 162.00,238.75 "
             + "162.00,238.75 160.50,236.50 160.50,236.50Z M 184.25,224.75 "
           + "C 184.25,224.75 187.50,224.00 187.50,224.00 "
             + "187.50,224.00 191.00,223.25 191.00,223.25 "
             + "191.00,223.25 193.75,222.25 193.75,222.25 "
             + "193.75,222.25 196.75,221.25 196.75,221.25 "
             + "196.75,221.25 199.50,222.00 199.50,222.00 "
             + "199.50,222.00 201.25,223.25 201.25,223.25 "
             + "201.25,223.25 201.75,225.75 201.75,225.75 "
             + "201.75,225.75 200.75,228.25 200.75,228.25 "
             + "200.75,228.25 197.50,231.50 197.50,231.50 "
             + "197.50,231.50 192.25,232.25 192.25,232.25 "
             + "192.25,232.25 187.50,232.25 187.50,232.25 "
             + "187.50,232.25 183.50,230.50 183.50,230.50 "
             + "183.50,230.50 182.00,228.75 182.00,228.75 "
             + "182.00,228.75 182.00,226.50 182.00,226.50Z M 89.75,174.50 "
           + "C 89.75,174.50 92.75,174.00 92.75,174.00 "
             + "92.75,174.00 94.25,177.25 94.25,177.25 "
             + "94.25,177.25 94.25,180.50 94.25,180.50 "
             + "94.25,180.50 93.50,183.00 93.50,183.00 "
             + "93.50,183.00 91.00,184.75 91.00,184.75 "
             + "91.00,184.75 87.75,183.75 87.75,183.75 "
             + "87.75,183.75 85.75,182.25 85.75,182.25 "
             + "85.75,182.25 85.50,178.00 85.50,178.00 "
             + "85.50,178.00 86.50,175.75 86.50,175.75Z M 100.25,192.00 "
           + "C 100.25,192.00 103.50,194.25 103.50,194.25 "
             + "103.50,194.25 105.25,197.25 105.25,197.25 "
             + "105.25,197.25 108.00,202.00 108.00,202.00 "
             + "108.00,202.00 113.75,207.25 113.75,207.25 "
             + "113.75,207.25 118.50,212.00 118.50,212.00 "
             + "118.50,212.00 123.50,215.50 123.50,215.50 "
             + "123.50,215.50 128.50,219.00 128.50,219.00 "
             + "128.50,219.00 132.25,221.75 132.25,221.75 "
             + "132.25,221.75 135.00,224.00 135.00,224.00 "
             + "135.00,224.00 135.75,226.25 135.75,226.25 "
             + "135.75,226.25 133.50,227.00 133.50,227.00 "
             + "133.50,227.00 130.00,226.50 130.00,226.50 "
             + "130.00,226.50 124.00,222.25 124.00,222.25 "
             + "124.00,222.25 119.00,218.75 119.00,218.75 "
             + "119.00,218.75 113.75,214.50 113.75,214.50 "
             + "113.75,214.50 108.75,209.00 108.75,209.00 "
             + "108.75,209.00 104.25,204.50 104.25,204.50 "
             + "104.25,204.50 100.00,199.75 100.00,199.75 "
             + "100.00,199.75 98.75,195.75 98.75,195.75Z M 117.00,202.00 "
           + "C 117.00,202.00 121.25,204.25 121.25,204.25 "
             + "121.25,204.25 124.50,206.75 124.50,206.75 "
             + "124.50,206.75 128.00,210.50 128.00,210.50 "
             + "128.00,210.50 132.00,214.25 132.00,214.25 "
             + "132.00,214.25 137.00,217.50 137.00,217.50 "
             + "137.00,217.50 142.25,219.50 142.25,219.50 "
             + "142.25,219.50 147.50,222.00 147.50,222.00 "
             + "147.50,222.00 154.25,225.00 154.25,225.00 "
             + "154.25,225.00 161.00,226.75 161.00,226.75 "
             + "161.00,226.75 161.75,230.25 161.75,230.25 "
             + "161.75,230.25 160.75,231.75 160.75,231.75 "
             + "160.75,231.75 158.50,232.25 158.50,232.25 "
             + "158.50,232.25 156.00,232.00 156.00,232.00 "
             + "156.00,232.00 152.50,230.00 152.50,230.00 "
             + "152.50,230.00 149.00,228.50 149.00,228.50 "
             + "149.00,228.50 145.50,227.00 145.50,227.00 "
             + "145.50,227.00 140.75,225.75 140.75,225.75 "
             + "140.75,225.75 137.00,223.25 137.00,223.25 "
             + "137.00,223.25 133.25,221.00 133.25,221.00 "
             + "133.25,221.00 129.75,218.25 129.75,218.25 "
             + "129.75,218.25 126.25,216.00 126.25,216.00 "
             + "126.25,216.00 121.75,212.00 121.75,212.00 "
             + "121.75,212.00 117.75,208.25 117.75,208.25 "
             + "117.75,208.25 116.25,205.50 116.25,205.50Z M 102.50,176.50 "
           + "C 102.50,176.50 104.00,180.00 104.00,180.00 "
             + "104.00,180.00 105.00,183.75 105.00,183.75 "
             + "105.00,183.75 107.00,188.00 107.00,188.00 "
             + "107.00,188.00 109.25,191.25 109.25,191.25 "
             + "109.25,191.25 111.50,194.50 111.50,194.50 "
             + "111.50,194.50 114.00,197.50 114.00,197.50 "
             + "114.00,197.50 115.00,200.25 115.00,200.25 "
             + "115.00,200.25 114.00,201.75 114.00,201.75 "
             + "114.00,201.75 110.50,201.00 110.50,201.00 "
             + "110.50,201.00 107.50,197.75 107.50,197.75 "
             + "107.50,197.75 105.25,194.75 105.25,194.75 "
             + "105.25,194.75 102.50,190.00 102.50,190.00 "
             + "102.50,190.00 100.50,186.50 100.50,186.50 "
             + "100.50,186.50 98.25,182.00 98.25,182.00 "
             + "98.25,182.00 98.25,177.25 98.25,177.25 "
             + "98.25,177.25 98.50,175.50 98.50,175.50 "
             + "98.50,175.50 100.50,175.25 100.50,175.25Z M 109.50,168.50 "
           + "C 109.50,168.50 109.25,165.25 109.25,165.25 "
             + "109.25,165.25 109.25,161.50 109.25,161.50 "
             + "109.25,161.50 109.25,158.25 109.25,158.25 "
             + "109.25,158.25 106.50,155.25 106.50,155.25 "
             + "106.50,155.25 103.00,154.25 103.00,154.25 "
             + "103.00,154.25 98.50,154.50 98.50,154.50 "
             + "98.50,154.50 95.25,158.00 95.25,158.00 "
             + "95.25,158.00 93.75,161.00 93.75,161.00 "
             + "93.75,161.00 93.75,164.25 93.75,164.25 "
             + "93.75,164.25 95.50,167.50 95.50,167.50 "
             + "95.50,167.50 98.50,169.50 98.50,169.50 "
             + "98.50,169.50 101.75,171.75 101.75,171.75 "
             + "101.75,171.75 104.25,174.75 104.25,174.75 "
             + "104.25,174.75 106.25,179.50 106.25,179.50 "
             + "106.25,179.50 107.50,183.75 107.50,183.75 "
             + "107.50,183.75 110.00,188.50 110.00,188.50 "
             + "110.00,188.50 112.25,192.50 112.25,192.50 "
             + "112.25,192.50 114.50,196.25 114.50,196.25 "
             + "114.50,196.25 117.75,200.75 117.75,200.75 "
             + "117.75,200.75 122.75,203.50 122.75,203.50 "
             + "122.75,203.50 126.25,207.00 126.25,207.00 "
             + "126.25,207.00 130.00,210.25 130.00,210.25 "
             + "130.00,210.25 135.00,213.50 135.00,213.50 "
             + "135.00,213.50 141.25,216.75 141.25,216.75 "
             + "141.25,216.75 147.75,220.00 147.75,220.00 "
             + "147.75,220.00 154.25,222.75 154.25,222.75 "
             + "154.25,222.75 160.75,225.00 160.75,225.00 "
             + "160.75,225.00 165.75,226.00 165.75,226.00 "
             + "165.75,226.00 170.75,227.75 170.75,227.75 "
             + "170.75,227.75 176.25,229.00 176.25,229.00 "
             + "176.25,229.00 179.25,228.25 179.25,228.25 "
             + "179.25,228.25 179.75,225.75 179.75,225.75 "
             + "179.75,225.75 178.00,223.50 178.00,223.50 "
             + "178.00,223.50 173.75,222.00 173.75,222.00 "
             + "173.75,222.00 167.50,220.75 167.50,220.75 "
             + "167.50,220.75 160.50,218.50 160.50,218.50 "
             + "160.50,218.50 152.00,215.25 152.00,215.25 "
             + "152.00,215.25 143.50,212.00 143.50,212.00 "
             + "143.50,212.00 133.50,205.25 133.50,205.25 "
             + "133.50,205.25 127.00,200.25 127.00,200.25 "
             + "127.00,200.25 122.00,194.00 122.00,194.00 "
             + "122.00,194.00 117.75,188.00 117.75,188.00 "
             + "117.75,188.00 114.50,181.50 114.50,181.50 "
             + "114.50,181.50 111.75,175.50 111.75,175.50 "
             + "111.75,175.50 110.75,172.25 110.75,172.25Z M 119.25,167.25 "
           + "C 119.25,167.25 120.75,164.50 120.75,164.50 "
             + "120.75,164.50 122.25,162.25 122.25,162.25 "
             + "122.25,162.25 123.25,159.50 123.25,159.50 "
             + "123.25,159.50 121.50,156.25 121.50,156.25 "
             + "121.50,156.25 118.00,155.00 118.00,155.00 "
             + "118.00,155.00 115.50,155.50 115.50,155.50 "
             + "115.50,155.50 112.25,157.00 112.25,157.00 "
             + "112.25,157.00 111.50,160.50 111.50,160.50 "
             + "111.50,160.50 111.50,163.25 111.50,163.25 "
             + "111.50,163.25 112.75,166.75 112.75,166.75 "
             + "112.75,166.75 113.25,171.75 113.25,171.75 "
             + "113.25,171.75 114.75,176.50 114.75,176.50 "
             + "114.75,176.50 117.00,180.75 117.00,180.75 "
             + "117.00,180.75 118.50,184.25 118.50,184.25 "
             + "118.50,184.25 120.00,188.00 120.00,188.00 "
             + "120.00,188.00 122.75,191.00 122.75,191.00 "
             + "122.75,191.00 125.25,195.25 125.25,195.25 "
             + "125.25,195.25 129.25,198.50 129.25,198.50 "
             + "129.25,198.50 133.25,202.50 133.25,202.50 "
             + "133.25,202.50 138.00,206.00 138.00,206.00 "
             + "138.00,206.00 144.75,209.50 144.75,209.50 "
             + "144.75,209.50 151.00,212.00 151.00,212.00 "
             + "151.00,212.00 156.75,213.75 156.75,213.75 "
             + "156.75,213.75 162.75,216.00 162.75,216.00 "
             + "162.75,216.00 169.00,218.00 169.00,218.00 "
             + "169.00,218.00 175.25,219.50 175.25,219.50 "
             + "175.25,219.50 181.25,220.50 181.25,220.50 "
             + "181.25,220.50 186.75,221.25 186.75,221.25 "
             + "186.75,221.25 189.50,220.25 189.50,220.25 "
             + "189.50,220.25 191.50,217.25 191.50,217.25 "
             + "191.50,217.25 190.25,214.00 190.25,214.00 "
             + "190.25,214.00 188.50,211.50 188.50,211.50 "
             + "188.50,211.50 185.75,210.75 185.75,210.75 "
             + "185.75,210.75 183.00,210.75 183.00,210.75 "
             + "183.00,210.75 180.50,211.50 180.50,211.50 "
             + "180.50,211.50 178.50,212.75 178.50,212.75 "
             + "178.50,212.75 175.75,213.00 175.75,213.00 "
             + "175.75,213.00 171.00,212.25 171.00,212.25 "
             + "171.00,212.25 166.25,210.00 166.25,210.00 "
             + "166.25,210.00 160.00,208.00 160.00,208.00 "
             + "160.00,208.00 154.00,205.75 154.00,205.75 "
             + "154.00,205.75 146.75,202.25 146.75,202.25 "
             + "146.75,202.25 139.50,198.50 139.50,198.50 "
             + "139.50,198.50 134.00,194.50 134.00,194.50 "
             + "134.00,194.50 129.50,189.25 129.50,189.25 "
             + "129.50,189.25 125.50,184.50 125.50,184.50 "
             + "125.50,184.50 121.75,179.25 121.75,179.25 "
             + "121.75,179.25 119.50,175.25 119.50,175.25 "
             + "119.50,175.25 118.50,171.75 118.50,171.75 "
             + "118.50,171.75 118.50,169.75 118.50,169.75Z M 132.25,163.25 "
           + "C 132.25,163.25 132.00,166.00 132.00,166.00 "
             + "132.00,166.00 131.00,168.50 131.00,168.50 "
             + "131.00,168.50 130.50,170.50 130.50,170.50 "
             + "130.50,170.50 130.00,172.75 130.00,172.75 "
             + "130.00,172.75 130.25,175.00 130.25,175.00 "
             + "130.25,175.00 133.25,178.50 133.25,178.50 "
             + "133.25,178.50 135.75,182.00 135.75,182.00 "
             + "135.75,182.00 139.00,186.25 139.00,186.25 "
             + "139.00,186.25 142.25,189.00 142.25,189.00 "
             + "142.25,189.00 147.25,192.50 147.25,192.50 "
             + "147.25,192.50 152.00,195.50 152.00,195.50 "
             + "152.00,195.50 157.00,198.25 157.00,198.25 "
             + "157.00,198.25 163.00,201.00 163.00,201.00 "
             + "163.00,201.00 165.50,202.00 165.50,202.00 "
             + "165.50,202.00 169.50,202.50 169.50,202.50 "
             + "169.50,202.50 174.00,202.50 174.00,202.50 "
             + "174.00,202.50 178.00,202.75 178.00,202.75 "
             + "178.00,202.75 181.50,204.00 181.50,204.00 "
             + "181.50,204.00 183.75,206.50 183.75,206.50 "
             + "183.75,206.50 183.25,208.75 183.25,208.75 "
             + "183.25,208.75 180.00,210.00 180.00,210.00 "
             + "180.00,210.00 176.50,210.00 176.50,210.00 "
             + "176.50,210.00 172.75,209.50 172.75,209.50 "
             + "172.75,209.50 169.50,208.25 169.50,208.25 "
             + "169.50,208.25 165.00,208.25 165.00,208.25 "
             + "165.00,208.25 161.00,206.75 161.00,206.75 "
             + "161.00,206.75 155.50,204.75 155.50,204.75 "
             + "155.50,204.75 150.00,202.25 150.00,202.25 "
             + "150.00,202.25 144.25,199.00 144.25,199.00 "
             + "144.25,199.00 138.00,195.75 138.00,195.75 "
             + "138.00,195.75 133.75,191.25 133.75,191.25 "
             + "133.75,191.25 130.50,187.50 130.50,187.50 "
             + "130.50,187.50 127.75,184.00 127.75,184.00 "
             + "127.75,184.00 124.75,178.75 124.75,178.75 "
             + "124.75,178.75 121.75,173.25 121.75,173.25 "
             + "121.75,173.25 121.50,169.00 121.50,169.00 "
             + "121.50,169.00 122.25,164.75 122.25,164.75 "
             + "122.25,164.75 124.25,161.75 124.25,161.75 "
             + "124.25,161.75 126.25,160.00 126.25,160.00 "
             + "126.25,160.00 128.25,159.75 128.25,159.75 "
             + "128.25,159.75 130.50,160.50 130.50,160.50Z ")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }
	        else if (proteinLocalization == eukaryotaArray[eukaPos + 7]) {
	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "golgiMem_euka")
				  .attr("fill", "none")
				  .attr("stroke", colorCellCompartment)
				  .attr("stroke-width", "3")
				  .attr("d", "M 162.50,233.75 "
           + "C 162.50,233.75 165.50,232.75 165.50,232.75 "
             + "165.50,232.75 167.25,234.75 167.25,234.75 "
             + "167.25,234.75 167.50,237.25 167.50,237.25 "
             + "167.50,237.25 166.75,238.75 166.75,238.75 "
             + "166.75,238.75 164.00,239.00 164.00,239.00 "
             + "164.00,239.00 162.00,238.75 162.00,238.75 "
             + "162.00,238.75 160.50,236.50 160.50,236.50Z M 184.25,224.75 "
           + "C 184.25,224.75 187.50,224.00 187.50,224.00 "
             + "187.50,224.00 191.00,223.25 191.00,223.25 "
             + "191.00,223.25 193.75,222.25 193.75,222.25 "
             + "193.75,222.25 196.75,221.25 196.75,221.25 "
             + "196.75,221.25 199.50,222.00 199.50,222.00 "
             + "199.50,222.00 201.25,223.25 201.25,223.25 "
             + "201.25,223.25 201.75,225.75 201.75,225.75 "
             + "201.75,225.75 200.75,228.25 200.75,228.25 "
             + "200.75,228.25 197.50,231.50 197.50,231.50 "
             + "197.50,231.50 192.25,232.25 192.25,232.25 "
             + "192.25,232.25 187.50,232.25 187.50,232.25 "
             + "187.50,232.25 183.50,230.50 183.50,230.50 "
             + "183.50,230.50 182.00,228.75 182.00,228.75 "
             + "182.00,228.75 182.00,226.50 182.00,226.50Z M 89.75,174.50 "
           + "C 89.75,174.50 92.75,174.00 92.75,174.00 "
             + "92.75,174.00 94.25,177.25 94.25,177.25 "
             + "94.25,177.25 94.25,180.50 94.25,180.50 "
             + "94.25,180.50 93.50,183.00 93.50,183.00 "
             + "93.50,183.00 91.00,184.75 91.00,184.75 "
             + "91.00,184.75 87.75,183.75 87.75,183.75 "
             + "87.75,183.75 85.75,182.25 85.75,182.25 "
             + "85.75,182.25 85.50,178.00 85.50,178.00 "
             + "85.50,178.00 86.50,175.75 86.50,175.75Z M 100.25,192.00 "
           + "C 100.25,192.00 103.50,194.25 103.50,194.25 "
             + "103.50,194.25 105.25,197.25 105.25,197.25 "
             + "105.25,197.25 108.00,202.00 108.00,202.00 "
             + "108.00,202.00 113.75,207.25 113.75,207.25 "
             + "113.75,207.25 118.50,212.00 118.50,212.00 "
             + "118.50,212.00 123.50,215.50 123.50,215.50 "
             + "123.50,215.50 128.50,219.00 128.50,219.00 "
             + "128.50,219.00 132.25,221.75 132.25,221.75 "
             + "132.25,221.75 135.00,224.00 135.00,224.00 "
             + "135.00,224.00 135.75,226.25 135.75,226.25 "
             + "135.75,226.25 133.50,227.00 133.50,227.00 "
             + "133.50,227.00 130.00,226.50 130.00,226.50 "
             + "130.00,226.50 124.00,222.25 124.00,222.25 "
             + "124.00,222.25 119.00,218.75 119.00,218.75 "
             + "119.00,218.75 113.75,214.50 113.75,214.50 "
             + "113.75,214.50 108.75,209.00 108.75,209.00 "
             + "108.75,209.00 104.25,204.50 104.25,204.50 "
             + "104.25,204.50 100.00,199.75 100.00,199.75 "
             + "100.00,199.75 98.75,195.75 98.75,195.75Z M 117.00,202.00 "
           + "C 117.00,202.00 121.25,204.25 121.25,204.25 "
             + "121.25,204.25 124.50,206.75 124.50,206.75 "
             + "124.50,206.75 128.00,210.50 128.00,210.50 "
             + "128.00,210.50 132.00,214.25 132.00,214.25 "
             + "132.00,214.25 137.00,217.50 137.00,217.50 "
             + "137.00,217.50 142.25,219.50 142.25,219.50 "
             + "142.25,219.50 147.50,222.00 147.50,222.00 "
             + "147.50,222.00 154.25,225.00 154.25,225.00 "
             + "154.25,225.00 161.00,226.75 161.00,226.75 "
             + "161.00,226.75 161.75,230.25 161.75,230.25 "
             + "161.75,230.25 160.75,231.75 160.75,231.75 "
             + "160.75,231.75 158.50,232.25 158.50,232.25 "
             + "158.50,232.25 156.00,232.00 156.00,232.00 "
             + "156.00,232.00 152.50,230.00 152.50,230.00 "
             + "152.50,230.00 149.00,228.50 149.00,228.50 "
             + "149.00,228.50 145.50,227.00 145.50,227.00 "
             + "145.50,227.00 140.75,225.75 140.75,225.75 "
             + "140.75,225.75 137.00,223.25 137.00,223.25 "
             + "137.00,223.25 133.25,221.00 133.25,221.00 "
             + "133.25,221.00 129.75,218.25 129.75,218.25 "
             + "129.75,218.25 126.25,216.00 126.25,216.00 "
             + "126.25,216.00 121.75,212.00 121.75,212.00 "
             + "121.75,212.00 117.75,208.25 117.75,208.25 "
             + "117.75,208.25 116.25,205.50 116.25,205.50Z M 102.50,176.50 "
           + "C 102.50,176.50 104.00,180.00 104.00,180.00 "
             + "104.00,180.00 105.00,183.75 105.00,183.75 "
             + "105.00,183.75 107.00,188.00 107.00,188.00 "
             + "107.00,188.00 109.25,191.25 109.25,191.25 "
             + "109.25,191.25 111.50,194.50 111.50,194.50 "
             + "111.50,194.50 114.00,197.50 114.00,197.50 "
             + "114.00,197.50 115.00,200.25 115.00,200.25 "
             + "115.00,200.25 114.00,201.75 114.00,201.75 "
             + "114.00,201.75 110.50,201.00 110.50,201.00 "
             + "110.50,201.00 107.50,197.75 107.50,197.75 "
             + "107.50,197.75 105.25,194.75 105.25,194.75 "
             + "105.25,194.75 102.50,190.00 102.50,190.00 "
             + "102.50,190.00 100.50,186.50 100.50,186.50 "
             + "100.50,186.50 98.25,182.00 98.25,182.00 "
             + "98.25,182.00 98.25,177.25 98.25,177.25 "
             + "98.25,177.25 98.50,175.50 98.50,175.50 "
             + "98.50,175.50 100.50,175.25 100.50,175.25Z M 109.50,168.50 "
           + "C 109.50,168.50 109.25,165.25 109.25,165.25 "
             + "109.25,165.25 109.25,161.50 109.25,161.50 "
             + "109.25,161.50 109.25,158.25 109.25,158.25 "
             + "109.25,158.25 106.50,155.25 106.50,155.25 "
             + "106.50,155.25 103.00,154.25 103.00,154.25 "
             + "103.00,154.25 98.50,154.50 98.50,154.50 "
             + "98.50,154.50 95.25,158.00 95.25,158.00 "
             + "95.25,158.00 93.75,161.00 93.75,161.00 "
             + "93.75,161.00 93.75,164.25 93.75,164.25 "
             + "93.75,164.25 95.50,167.50 95.50,167.50 "
             + "95.50,167.50 98.50,169.50 98.50,169.50 "
             + "98.50,169.50 101.75,171.75 101.75,171.75 "
             + "101.75,171.75 104.25,174.75 104.25,174.75 "
             + "104.25,174.75 106.25,179.50 106.25,179.50 "
             + "106.25,179.50 107.50,183.75 107.50,183.75 "
             + "107.50,183.75 110.00,188.50 110.00,188.50 "
             + "110.00,188.50 112.25,192.50 112.25,192.50 "
             + "112.25,192.50 114.50,196.25 114.50,196.25 "
             + "114.50,196.25 117.75,200.75 117.75,200.75 "
             + "117.75,200.75 122.75,203.50 122.75,203.50 "
             + "122.75,203.50 126.25,207.00 126.25,207.00 "
             + "126.25,207.00 130.00,210.25 130.00,210.25 "
             + "130.00,210.25 135.00,213.50 135.00,213.50 "
             + "135.00,213.50 141.25,216.75 141.25,216.75 "
             + "141.25,216.75 147.75,220.00 147.75,220.00 "
             + "147.75,220.00 154.25,222.75 154.25,222.75 "
             + "154.25,222.75 160.75,225.00 160.75,225.00 "
             + "160.75,225.00 165.75,226.00 165.75,226.00 "
             + "165.75,226.00 170.75,227.75 170.75,227.75 "
             + "170.75,227.75 176.25,229.00 176.25,229.00 "
             + "176.25,229.00 179.25,228.25 179.25,228.25 "
             + "179.25,228.25 179.75,225.75 179.75,225.75 "
             + "179.75,225.75 178.00,223.50 178.00,223.50 "
             + "178.00,223.50 173.75,222.00 173.75,222.00 "
             + "173.75,222.00 167.50,220.75 167.50,220.75 "
             + "167.50,220.75 160.50,218.50 160.50,218.50 "
             + "160.50,218.50 152.00,215.25 152.00,215.25 "
             + "152.00,215.25 143.50,212.00 143.50,212.00 "
             + "143.50,212.00 133.50,205.25 133.50,205.25 "
             + "133.50,205.25 127.00,200.25 127.00,200.25 "
             + "127.00,200.25 122.00,194.00 122.00,194.00 "
             + "122.00,194.00 117.75,188.00 117.75,188.00 "
             + "117.75,188.00 114.50,181.50 114.50,181.50 "
             + "114.50,181.50 111.75,175.50 111.75,175.50 "
             + "111.75,175.50 110.75,172.25 110.75,172.25Z M 119.25,167.25 "
           + "C 119.25,167.25 120.75,164.50 120.75,164.50 "
             + "120.75,164.50 122.25,162.25 122.25,162.25 "
             + "122.25,162.25 123.25,159.50 123.25,159.50 "
             + "123.25,159.50 121.50,156.25 121.50,156.25 "
             + "121.50,156.25 118.00,155.00 118.00,155.00 "
             + "118.00,155.00 115.50,155.50 115.50,155.50 "
             + "115.50,155.50 112.25,157.00 112.25,157.00 "
             + "112.25,157.00 111.50,160.50 111.50,160.50 "
             + "111.50,160.50 111.50,163.25 111.50,163.25 "
             + "111.50,163.25 112.75,166.75 112.75,166.75 "
             + "112.75,166.75 113.25,171.75 113.25,171.75 "
             + "113.25,171.75 114.75,176.50 114.75,176.50 "
             + "114.75,176.50 117.00,180.75 117.00,180.75 "
             + "117.00,180.75 118.50,184.25 118.50,184.25 "
             + "118.50,184.25 120.00,188.00 120.00,188.00 "
             + "120.00,188.00 122.75,191.00 122.75,191.00 "
             + "122.75,191.00 125.25,195.25 125.25,195.25 "
             + "125.25,195.25 129.25,198.50 129.25,198.50 "
             + "129.25,198.50 133.25,202.50 133.25,202.50 "
             + "133.25,202.50 138.00,206.00 138.00,206.00 "
             + "138.00,206.00 144.75,209.50 144.75,209.50 "
             + "144.75,209.50 151.00,212.00 151.00,212.00 "
             + "151.00,212.00 156.75,213.75 156.75,213.75 "
             + "156.75,213.75 162.75,216.00 162.75,216.00 "
             + "162.75,216.00 169.00,218.00 169.00,218.00 "
             + "169.00,218.00 175.25,219.50 175.25,219.50 "
             + "175.25,219.50 181.25,220.50 181.25,220.50 "
             + "181.25,220.50 186.75,221.25 186.75,221.25 "
             + "186.75,221.25 189.50,220.25 189.50,220.25 "
             + "189.50,220.25 191.50,217.25 191.50,217.25 "
             + "191.50,217.25 190.25,214.00 190.25,214.00 "
             + "190.25,214.00 188.50,211.50 188.50,211.50 "
             + "188.50,211.50 185.75,210.75 185.75,210.75 "
             + "185.75,210.75 183.00,210.75 183.00,210.75 "
             + "183.00,210.75 180.50,211.50 180.50,211.50 "
             + "180.50,211.50 178.50,212.75 178.50,212.75 "
             + "178.50,212.75 175.75,213.00 175.75,213.00 "
             + "175.75,213.00 171.00,212.25 171.00,212.25 "
             + "171.00,212.25 166.25,210.00 166.25,210.00 "
             + "166.25,210.00 160.00,208.00 160.00,208.00 "
             + "160.00,208.00 154.00,205.75 154.00,205.75 "
             + "154.00,205.75 146.75,202.25 146.75,202.25 "
             + "146.75,202.25 139.50,198.50 139.50,198.50 "
             + "139.50,198.50 134.00,194.50 134.00,194.50 "
             + "134.00,194.50 129.50,189.25 129.50,189.25 "
             + "129.50,189.25 125.50,184.50 125.50,184.50 "
             + "125.50,184.50 121.75,179.25 121.75,179.25 "
             + "121.75,179.25 119.50,175.25 119.50,175.25 "
             + "119.50,175.25 118.50,171.75 118.50,171.75 "
             + "118.50,171.75 118.50,169.75 118.50,169.75Z M 132.25,163.25 "
           + "C 132.25,163.25 132.00,166.00 132.00,166.00 "
             + "132.00,166.00 131.00,168.50 131.00,168.50 "
             + "131.00,168.50 130.50,170.50 130.50,170.50 "
             + "130.50,170.50 130.00,172.75 130.00,172.75 "
             + "130.00,172.75 130.25,175.00 130.25,175.00 "
             + "130.25,175.00 133.25,178.50 133.25,178.50 "
             + "133.25,178.50 135.75,182.00 135.75,182.00 "
             + "135.75,182.00 139.00,186.25 139.00,186.25 "
             + "139.00,186.25 142.25,189.00 142.25,189.00 "
             + "142.25,189.00 147.25,192.50 147.25,192.50 "
             + "147.25,192.50 152.00,195.50 152.00,195.50 "
             + "152.00,195.50 157.00,198.25 157.00,198.25 "
             + "157.00,198.25 163.00,201.00 163.00,201.00 "
             + "163.00,201.00 165.50,202.00 165.50,202.00 "
             + "165.50,202.00 169.50,202.50 169.50,202.50 "
             + "169.50,202.50 174.00,202.50 174.00,202.50 "
             + "174.00,202.50 178.00,202.75 178.00,202.75 "
             + "178.00,202.75 181.50,204.00 181.50,204.00 "
             + "181.50,204.00 183.75,206.50 183.75,206.50 "
             + "183.75,206.50 183.25,208.75 183.25,208.75 "
             + "183.25,208.75 180.00,210.00 180.00,210.00 "
             + "180.00,210.00 176.50,210.00 176.50,210.00 "
             + "176.50,210.00 172.75,209.50 172.75,209.50 "
             + "172.75,209.50 169.50,208.25 169.50,208.25 "
             + "169.50,208.25 165.00,208.25 165.00,208.25 "
             + "165.00,208.25 161.00,206.75 161.00,206.75 "
             + "161.00,206.75 155.50,204.75 155.50,204.75 "
             + "155.50,204.75 150.00,202.25 150.00,202.25 "
             + "150.00,202.25 144.25,199.00 144.25,199.00 "
             + "144.25,199.00 138.00,195.75 138.00,195.75 "
             + "138.00,195.75 133.75,191.25 133.75,191.25 "
             + "133.75,191.25 130.50,187.50 130.50,187.50 "
             + "130.50,187.50 127.75,184.00 127.75,184.00 "
             + "127.75,184.00 124.75,178.75 124.75,178.75 "
             + "124.75,178.75 121.75,173.25 121.75,173.25 "
             + "121.75,173.25 121.50,169.00 121.50,169.00 "
             + "121.50,169.00 122.25,164.75 122.25,164.75 "
             + "122.25,164.75 124.25,161.75 124.25,161.75 "
             + "124.25,161.75 126.25,160.00 126.25,160.00 "
             + "126.25,160.00 128.25,159.75 128.25,159.75 "
             + "128.25,159.75 130.50,160.50 130.50,160.50Z ")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }

	        else if (proteinLocalization == eukaryotaArray[eukaPos + 8]) {
	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "mitochondria_euka")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 354.75,205.50 "
           + "C 354.75,205.50 359.25,204.00 359.25,204.00 "
             + "359.25,204.00 363.00,202.00 363.00,202.00 "
             + "363.00,202.00 367.50,200.25 367.50,200.25 "
             + "367.50,200.25 371.50,198.00 371.50,198.00 "
             + "371.50,198.00 375.75,195.50 375.75,195.50 "
             + "375.75,195.50 380.25,192.75 380.25,192.75 "
             + "380.25,192.75 384.00,190.75 384.00,190.75 "
             + "384.00,190.75 389.00,190.25 389.00,190.25 "
             + "389.00,190.25 393.00,189.75 393.00,189.75 "
             + "393.00,189.75 397.00,190.25 397.00,190.25 "
             + "397.00,190.25 401.00,191.50 401.00,191.50 "
             + "401.00,191.50 402.25,194.00 402.25,194.00 "
             + "402.25,194.00 402.25,196.00 402.25,196.00 "
             + "402.25,196.00 402.00,199.50 402.00,199.50 "
             + "402.00,199.50 400.50,202.50 400.50,202.50 "
             + "400.50,202.50 399.00,205.75 399.00,205.75 "
             + "399.00,205.75 396.00,208.75 396.00,208.75 "
             + "396.00,208.75 392.00,212.00 392.00,212.00 "
             + "392.00,212.00 388.25,215.00 388.25,215.00 "
             + "388.25,215.00 383.25,219.00 383.25,219.00 "
             + "383.25,219.00 376.75,222.75 376.75,222.75 "
             + "376.75,222.75 369.50,226.00 369.50,226.00 "
             + "369.50,226.00 362.25,228.75 362.25,228.75 "
             + "362.25,228.75 356.25,230.75 356.25,230.75 "
             + "356.25,230.75 350.50,231.50 350.50,231.50 "
             + "350.50,231.50 343.50,231.50 343.50,231.50 "
             + "343.50,231.50 339.50,229.25 339.50,229.25 "
             + "339.50,229.25 337.00,227.50 337.00,227.50 "
             + "337.00,227.50 335.50,224.25 335.50,224.25 "
             + "335.50,224.25 335.50,219.75 335.50,219.75 "
             + "335.50,219.75 337.50,216.00 337.50,216.00 "
             + "337.50,216.00 340.75,212.50 340.75,212.50 "
             + "340.75,212.50 344.75,210.00 344.75,210.00 "
             + "344.75,210.00 349.25,207.50 349.25,207.50Z ")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }
	        else if (proteinLocalization == eukaryotaArray[eukaPos + 9]) {

	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "mitoconMem_euka")
				  .attr("fill", "none")
				  .attr("stroke", colorCellCompartment)
				  .attr("stroke-width", "3")
				  .attr("d", "M 354.75,205.50 "
           + "C 354.75,205.50 359.25,204.00 359.25,204.00 "
             + "359.25,204.00 363.00,202.00 363.00,202.00 "
             + "363.00,202.00 367.50,200.25 367.50,200.25 "
             + "367.50,200.25 371.50,198.00 371.50,198.00 "
             + "371.50,198.00 375.75,195.50 375.75,195.50 "
             + "375.75,195.50 380.25,192.75 380.25,192.75 "
             + "380.25,192.75 384.00,190.75 384.00,190.75 "
             + "384.00,190.75 389.00,190.25 389.00,190.25 "
             + "389.00,190.25 393.00,189.75 393.00,189.75 "
             + "393.00,189.75 397.00,190.25 397.00,190.25 "
             + "397.00,190.25 401.00,191.50 401.00,191.50 "
             + "401.00,191.50 402.25,194.00 402.25,194.00 "
             + "402.25,194.00 402.25,196.00 402.25,196.00 "
             + "402.25,196.00 402.00,199.50 402.00,199.50 "
             + "402.00,199.50 400.50,202.50 400.50,202.50 "
             + "400.50,202.50 399.00,205.75 399.00,205.75 "
             + "399.00,205.75 396.00,208.75 396.00,208.75 "
             + "396.00,208.75 392.00,212.00 392.00,212.00 "
             + "392.00,212.00 388.25,215.00 388.25,215.00 "
             + "388.25,215.00 383.25,219.00 383.25,219.00 "
             + "383.25,219.00 376.75,222.75 376.75,222.75 "
             + "376.75,222.75 369.50,226.00 369.50,226.00 "
             + "369.50,226.00 362.25,228.75 362.25,228.75 "
             + "362.25,228.75 356.25,230.75 356.25,230.75 "
             + "356.25,230.75 350.50,231.50 350.50,231.50 "
             + "350.50,231.50 343.50,231.50 343.50,231.50 "
             + "343.50,231.50 339.50,229.25 339.50,229.25 "
             + "339.50,229.25 337.00,227.50 337.00,227.50 "
             + "337.00,227.50 335.50,224.25 335.50,224.25 "
             + "335.50,224.25 335.50,219.75 335.50,219.75 "
             + "335.50,219.75 337.50,216.00 337.50,216.00 "
             + "337.50,216.00 340.75,212.50 340.75,212.50 "
             + "340.75,212.50 344.75,210.00 344.75,210.00 "
             + "344.75,210.00 349.25,207.50 349.25,207.50Z ")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");
	        }

	        else if (proteinLocalization == eukaryotaArray[eukaPos + 10]) {
	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "nucleus_euka")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 234.75,138.25 "
           + "C 234.75,138.25 240.00,137.00 240.00,137.00 "
             + "240.00,137.00 245.25,136.50 245.25,136.50 "
             + "245.25,136.50 250.25,136.50 250.25,136.50 "
             + "250.25,136.50 255.00,136.50 255.00,136.50 "
             + "255.00,136.50 259.50,137.00 259.50,137.00 "
             + "259.50,137.00 263.50,137.00 263.50,137.00 "
             + "263.50,137.00 268.75,137.50 268.75,137.50 "
             + "268.75,137.50 273.00,137.75 273.00,137.75 "
             + "273.00,137.75 277.75,138.75 277.75,138.75 "
             + "277.75,138.75 283.00,139.75 283.00,139.75 "
             + "283.00,139.75 287.75,141.50 287.75,141.50 "
             + "287.75,141.50 292.50,144.25 292.50,144.25 "
             + "292.50,144.25 296.25,147.25 296.25,147.25 "
             + "296.25,147.25 298.25,152.00 298.25,152.00 "
             + "298.25,152.00 299.50,156.00 299.50,156.00 "
             + "299.50,156.00 300.00,160.75 300.00,160.75 "
             + "300.00,160.75 299.50,164.50 299.50,164.50 "
             + "299.50,164.50 296.50,167.75 296.50,167.75 "
             + "296.50,167.75 292.75,169.75 292.75,169.75 "
             + "292.75,169.75 288.50,172.25 288.50,172.25 "
             + "288.50,172.25 282.25,173.50 282.25,173.50 "
             + "282.25,173.50 278.75,174.25 278.75,174.25 "
             + "278.75,174.25 274.75,174.50 274.75,174.50 "
             + "274.75,174.50 270.25,175.00 270.25,175.00 "
             + "270.25,175.00 262.75,175.00 262.75,175.00 "
             + "262.75,175.00 257.00,174.50 257.00,174.50 "
             + "257.00,174.50 250.75,173.75 250.75,173.75 "
             + "250.75,173.75 244.00,172.50 244.00,172.50 "
             + "244.00,172.50 237.00,170.50 237.00,170.50 "
             + "237.00,170.50 232.50,168.50 232.50,168.50 "
             + "232.50,168.50 227.25,165.50 227.25,165.50 "
             + "227.25,165.50 223.25,162.50 223.25,162.50 "
             + "223.25,162.50 220.25,157.75 220.25,157.75 "
             + "220.25,157.75 220.00,153.50 220.00,153.50 "
             + "220.00,153.50 220.75,150.00 220.75,150.00 "
             + "220.75,150.00 222.00,146.50 222.00,146.50 "
             + "222.00,146.50 224.25,143.50 224.25,143.50 "
             + "224.25,143.50 227.00,141.00 227.00,141.00 "
             + "227.00,141.00 230.25,139.00 230.25,139.00Z ")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }
	        else if (proteinLocalization == eukaryotaArray[eukaPos + 11]) {
	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "nucleusMem_euka")
				  .attr("fill", "none")
				  .attr("stroke", colorCellCompartment)
				  .attr("stroke-width", "3")
				  .attr("d", "M 234.75,138.25 "
           + "C 234.75,138.25 240.00,137.00 240.00,137.00 "
             + "240.00,137.00 245.25,136.50 245.25,136.50 "
             + "245.25,136.50 250.25,136.50 250.25,136.50 "
             + "250.25,136.50 255.00,136.50 255.00,136.50 "
             + "255.00,136.50 259.50,137.00 259.50,137.00 "
             + "259.50,137.00 263.50,137.00 263.50,137.00 "
             + "263.50,137.00 268.75,137.50 268.75,137.50 "
             + "268.75,137.50 273.00,137.75 273.00,137.75 "
             + "273.00,137.75 277.75,138.75 277.75,138.75 "
             + "277.75,138.75 283.00,139.75 283.00,139.75 "
             + "283.00,139.75 287.75,141.50 287.75,141.50 "
             + "287.75,141.50 292.50,144.25 292.50,144.25 "
             + "292.50,144.25 296.25,147.25 296.25,147.25 "
             + "296.25,147.25 298.25,152.00 298.25,152.00 "
             + "298.25,152.00 299.50,156.00 299.50,156.00 "
             + "299.50,156.00 300.00,160.75 300.00,160.75 "
             + "300.00,160.75 299.50,164.50 299.50,164.50 "
             + "299.50,164.50 296.50,167.75 296.50,167.75 "
             + "296.50,167.75 292.75,169.75 292.75,169.75 "
             + "292.75,169.75 288.50,172.25 288.50,172.25 "
             + "288.50,172.25 282.25,173.50 282.25,173.50 "
             + "282.25,173.50 278.75,174.25 278.75,174.25 "
             + "278.75,174.25 274.75,174.50 274.75,174.50 "
             + "274.75,174.50 270.25,175.00 270.25,175.00 "
             + "270.25,175.00 262.75,175.00 262.75,175.00 "
             + "262.75,175.00 257.00,174.50 257.00,174.50 "
             + "257.00,174.50 250.75,173.75 250.75,173.75 "
             + "250.75,173.75 244.00,172.50 244.00,172.50 "
             + "244.00,172.50 237.00,170.50 237.00,170.50 "
             + "237.00,170.50 232.50,168.50 232.50,168.50 "
             + "232.50,168.50 227.25,165.50 227.25,165.50 "
             + "227.25,165.50 223.25,162.50 223.25,162.50 "
             + "223.25,162.50 220.25,157.75 220.25,157.75 "
             + "220.25,157.75 220.00,153.50 220.00,153.50 "
             + "220.00,153.50 220.75,150.00 220.75,150.00 "
             + "220.75,150.00 222.00,146.50 222.00,146.50 "
             + "222.00,146.50 224.25,143.50 224.25,143.50 "
             + "224.25,143.50 227.00,141.00 227.00,141.00 "
             + "227.00,141.00 230.25,139.00 230.25,139.00Z ")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }
	        else if (proteinLocalization == eukaryotaArray[eukaPos + 12]) {
	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "peroxisome_euka")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 162.25,156.25 "
           + "C 162.25,156.25 169.25,157.50 169.25,157.50 "
             + "169.25,157.50 175.50,159.00 175.50,159.00 "
             + "175.50,159.00 181.25,161.00 181.25,161.00 "
             + "181.25,161.00 185.75,164.25 185.75,164.25 "
             + "185.75,164.25 188.00,169.00 188.00,169.00 "
             + "188.00,169.00 188.50,174.00 188.50,174.00 "
             + "188.50,174.00 187.00,178.00 187.00,178.00 "
             + "187.00,178.00 183.00,181.00 183.00,181.00 "
             + "183.00,181.00 177.50,182.25 177.50,182.25 "
             + "177.50,182.25 171.00,183.00 171.00,183.00 "
             + "171.00,183.00 165.00,182.00 165.00,182.00 "
             + "165.00,182.00 159.00,180.50 159.00,180.50 "
             + "159.00,180.50 155.25,178.50 155.25,178.50 "
             + "155.25,178.50 151.25,175.75 151.25,175.75 "
             + "151.25,175.75 147.75,170.00 147.75,170.00 "
             + "147.75,170.00 148.50,164.00 148.50,164.00 "
             + "148.50,164.00 152.00,158.75 152.00,158.75 "
             + "152.00,158.75 156.25,156.50 156.25,156.50Z ")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }
	        else if (proteinLocalization == eukaryotaArray[eukaPos + 13]) {

	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "peroxiMem_euka")
				  .attr("fill", "none")
				  .attr("stroke", colorCellCompartment)
				  .attr("stroke-width", "3")
				  .attr("d", "M 162.25,156.25 "
           + "C 162.25,156.25 169.25,157.50 169.25,157.50 "
             + "169.25,157.50 175.50,159.00 175.50,159.00 "
             + "175.50,159.00 181.25,161.00 181.25,161.00 "
             + "181.25,161.00 185.75,164.25 185.75,164.25 "
             + "185.75,164.25 188.00,169.00 188.00,169.00 "
             + "188.00,169.00 188.50,174.00 188.50,174.00 "
             + "188.50,174.00 187.00,178.00 187.00,178.00 "
             + "187.00,178.00 183.00,181.00 183.00,181.00 "
             + "183.00,181.00 177.50,182.25 177.50,182.25 "
             + "177.50,182.25 171.00,183.00 171.00,183.00 "
             + "171.00,183.00 165.00,182.00 165.00,182.00 "
             + "165.00,182.00 159.00,180.50 159.00,180.50 "
             + "159.00,180.50 155.25,178.50 155.25,178.50 "
             + "155.25,178.50 151.25,175.75 151.25,175.75 "
             + "151.25,175.75 147.75,170.00 147.75,170.00 "
             + "147.75,170.00 148.50,164.00 148.50,164.00 "
             + "148.50,164.00 152.00,158.75 152.00,158.75 "
             + "152.00,158.75 156.25,156.50 156.25,156.50Z ")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }
	        else if (proteinLocalization == eukaryotaArray[eukaPos + 14]) {
	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "plastid_euka")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 270.25,224.00 "
           + "C 270.25,224.00 274.75,223.50 274.75,223.50 "
             + "274.75,223.50 279.25,224.75 279.25,224.75 "
             + "279.25,224.75 283.00,226.50 283.00,226.50 "
             + "283.00,226.50 285.50,228.25 285.50,228.25 "
             + "285.50,228.25 287.75,230.75 287.75,230.75 "
             + "287.75,230.75 287.75,234.00 287.75,234.00 "
             + "287.75,234.00 287.00,237.75 287.00,237.75 "
             + "287.00,237.75 284.25,240.50 284.25,240.50 "
             + "284.25,240.50 280.75,241.25 280.75,241.25 "
             + "280.75,241.25 276.50,241.25 276.50,241.25 "
             + "276.50,241.25 271.75,241.50 271.75,241.50 "
             + "271.75,241.50 268.25,239.50 268.25,239.50 "
             + "268.25,239.50 264.75,238.50 264.75,238.50 "
             + "264.75,238.50 262.75,235.50 262.75,235.50 "
             + "262.75,235.50 262.50,231.25 262.50,231.25 "
             + "262.50,231.25 264.25,227.75 264.25,227.75 "
             + "264.25,227.75 267.00,224.75 267.00,224.75Z ")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }
	        else if (proteinLocalization == eukaryotaArray[eukaPos + 15]) {
	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "plasmaMem_euka")
				  .attr("fill", colorCellCompartment)				 
				  .attr("d", "M 211.00,93.21 "
           + "C 211.00,93.21 225.00,94.00 225.00,94.00 "
             + "225.00,94.00 241.00,94.00 241.00,94.00 "
             + "277.59,94.00 307.41,92.90 344.00,98.58 "
             + "365.66,101.94 390.38,107.89 408.00,121.50 "
             + "426.12,135.50 440.89,160.70 441.00,184.00 "
             + "441.00,184.00 441.00,194.00 441.00,194.00 "
             + "440.92,200.26 439.33,206.33 436.68,212.00 "
             + "431.34,223.40 420.64,233.13 410.00,239.55 "
             + "395.11,248.53 378.73,253.34 362.00,257.47 "
             + "345.26,261.61 313.90,266.97 297.00,267.00 "
             + "297.00,267.00 281.00,267.00 281.00,267.00 "
             + "281.00,267.00 266.00,268.00 266.00,268.00 "
             + "266.00,268.00 248.00,268.00 248.00,268.00 "
             + "248.00,268.00 233.00,267.00 233.00,267.00 "
             + "233.00,267.00 214.00,266.09 214.00,266.09 "
             + "190.17,264.46 169.49,262.61 146.00,257.42 "
             + "126.61,253.14 103.19,245.66 88.01,232.56 "
             + "80.83,226.36 72.46,214.95 69.06,206.00 "
             + "57.59,175.77 69.29,135.37 95.00,115.90 "
             + "108.88,105.39 131.72,97.49 149.00,95.28 "
             + "149.00,95.28 169.00,93.21 169.00,93.21 "
             + "169.00,93.21 211.00,93.21 211.00,93.21 Z "
           + "M 183.00,104.00 "
           + "C 183.00,104.00 171.00,104.91 171.00,104.91 "
             + "149.59,106.41 125.36,109.95 107.00,121.86 "
             + "100.77,125.91 94.44,131.88 90.22,138.00 "
             + "82.73,148.88 75.13,173.77 76.09,187.00 "
             + "76.52,192.87 79.68,202.75 82.37,208.00 "
             + "87.64,218.29 100.10,227.87 110.00,233.57 "
             + "132.03,246.26 157.20,248.77 182.00,251.17 "
             + "182.00,251.17 213.00,254.00 213.00,254.00 "
             + "213.00,254.00 291.00,254.00 291.00,254.00 "
             + "291.00,254.00 307.00,253.00 307.00,253.00 "
             + "318.45,252.95 329.72,250.95 341.00,249.08 "
             + "366.34,244.88 388.58,239.68 410.00,224.56 "
             + "414.91,221.10 419.55,217.04 422.90,212.00 "
             + "440.23,185.91 424.11,146.67 401.00,129.76 "
             + "387.80,120.09 371.64,115.54 356.00,111.63 "
             + "317.50,102.00 288.60,104.45 250.00,104.00 "
             + "250.00,104.00 235.00,103.14 235.00,103.14 "
             + "235.00,103.14 198.00,103.14 198.00,103.14 "
             + "191.93,104.16 188.99,103.99 183.00,104.00 Z")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }

	        else if (proteinLocalization == eukaryotaArray[eukaPos + 16]) {
	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "vacuole_euka")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 326.25,122.00 "
           + "C 326.25,122.00 330.25,121.50 330.25,121.50 "
             + "330.25,121.50 334.25,121.50 334.25,121.50 "
             + "334.25,121.50 338.00,121.50 338.00,121.50 "
             + "338.00,121.50 342.25,122.75 342.25,122.75 "
             + "342.25,122.75 345.75,124.00 345.75,124.00 "
             + "345.75,124.00 348.50,125.75 348.50,125.75 "
             + "348.50,125.75 351.75,127.25 351.75,127.25 "
             + "351.75,127.25 354.75,129.00 354.75,129.00 "
             + "354.75,129.00 358.25,131.25 358.25,131.25 "
             + "358.25,131.25 362.25,132.75 362.25,132.75 "
             + "362.25,132.75 365.25,134.50 365.25,134.50 "
             + "365.25,134.50 368.50,136.00 368.50,136.00 "
             + "368.50,136.00 372.00,137.75 372.00,137.75 "
             + "372.00,137.75 375.25,140.00 375.25,140.00 "
             + "375.25,140.00 378.50,142.25 378.50,142.25 "
             + "378.50,142.25 381.00,144.50 381.00,144.50 "
             + "381.00,144.50 384.50,147.25 384.50,147.25 "
             + "384.50,147.25 387.50,149.50 387.50,149.50 "
             + "387.50,149.50 389.75,151.25 389.75,151.25 "
             + "389.75,151.25 391.75,153.75 391.75,153.75 "
             + "391.75,153.75 393.25,156.00 393.25,156.00 "
             + "393.25,156.00 394.25,158.50 394.25,158.50 "
             + "394.25,158.50 395.75,160.25 395.75,160.25 "
             + "395.75,160.25 395.75,162.00 395.75,162.00 "
             + "395.75,162.00 397.00,165.00 397.00,165.00 "
             + "397.00,165.00 397.00,167.75 397.00,167.75 "
             + "397.00,167.75 396.25,170.00 396.25,170.00 "
             + "396.25,170.00 394.00,171.50 394.00,171.50 "
             + "394.00,171.50 390.25,172.25 390.25,172.25 "
             + "390.25,172.25 386.50,173.00 386.50,173.00 "
             + "386.50,173.00 383.00,173.25 383.00,173.25 "
             + "383.00,173.25 379.50,173.25 379.50,173.25 "
             + "379.50,173.25 376.00,174.00 376.00,174.00 "
             + "376.00,174.00 370.25,175.00 370.25,175.00 "
             + "370.25,175.00 365.25,176.50 365.25,176.50 "
             + "365.25,176.50 360.00,179.00 360.00,179.00 "
             + "360.00,179.00 354.50,181.75 354.50,181.75 "
             + "354.50,181.75 349.25,184.75 349.25,184.75 "
             + "349.25,184.75 344.50,187.25 344.50,187.25 "
             + "344.50,187.25 338.50,189.25 338.50,189.25 "
             + "338.50,189.25 332.25,192.75 332.25,192.75 "
             + "332.25,192.75 326.50,193.75 326.50,193.75 "
             + "326.50,193.75 322.25,195.00 322.25,195.00 "
             + "322.25,195.00 319.00,195.00 319.00,195.00 "
             + "319.00,195.00 317.00,193.50 317.00,193.50 "
             + "317.00,193.50 315.75,191.50 315.75,191.50 "
             + "315.75,191.50 315.25,188.75 315.25,188.75 "
             + "315.25,188.75 315.50,185.50 315.50,185.50 "
             + "315.50,185.50 316.50,182.75 316.50,182.75 "
             + "316.50,182.75 318.00,181.00 318.00,181.00 "
             + "318.00,181.00 319.75,179.00 319.75,179.00 "
             + "319.75,179.00 322.00,176.75 322.00,176.75 "
             + "322.00,176.75 323.50,174.75 323.50,174.75 "
             + "323.50,174.75 325.75,172.25 325.75,172.25 "
             + "325.75,172.25 327.00,170.00 327.00,170.00 "
             + "327.00,170.00 328.25,167.25 328.25,167.25 "
             + "328.25,167.25 328.00,164.50 328.00,164.50 "
             + "328.00,164.50 328.00,161.50 328.00,161.50 "
             + "328.00,161.50 326.50,158.50 326.50,158.50 "
             + "326.50,158.50 324.75,156.25 324.75,156.25 "
             + "324.75,156.25 322.00,153.25 322.00,153.25 "
             + "322.00,153.25 319.75,151.00 319.75,151.00 "
             + "319.75,151.00 316.50,148.00 316.50,148.00 "
             + "316.50,148.00 313.50,145.25 313.50,145.25 "
             + "313.50,145.25 311.25,141.50 311.25,141.50 "
             + "311.25,141.50 309.00,138.25 309.00,138.25 "
             + "309.00,138.25 308.75,134.50 308.75,134.50 "
             + "308.75,134.50 309.50,130.75 309.50,130.75 "
             + "309.50,130.75 310.75,128.75 310.75,128.75 "
             + "310.75,128.75 312.25,126.00 312.25,126.00 "
             + "312.25,126.00 314.75,124.25 314.75,124.25 "
             + "314.75,124.25 316.75,123.00 316.75,123.00 "
             + "316.75,123.00 319.75,121.75 319.75,121.75 "
             + "319.75,121.75 323.25,121.75 323.25,121.75Z ")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }
	        else if (proteinLocalization == eukaryotaArray[eukaPos + 17]) {
	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "vacuoleMem_euka")
				  .attr("fill", "none")
				  .attr("stroke", colorCellCompartment)
				  .attr("stroke-width", "3")
				  .attr("d", "M 326.25,122.00 "
           + "C 326.25,122.00 330.25,121.50 330.25,121.50 "
             + "330.25,121.50 334.25,121.50 334.25,121.50 "
             + "334.25,121.50 338.00,121.50 338.00,121.50 "
             + "338.00,121.50 342.25,122.75 342.25,122.75 "
             + "342.25,122.75 345.75,124.00 345.75,124.00 "
             + "345.75,124.00 348.50,125.75 348.50,125.75 "
             + "348.50,125.75 351.75,127.25 351.75,127.25 "
             + "351.75,127.25 354.75,129.00 354.75,129.00 "
             + "354.75,129.00 358.25,131.25 358.25,131.25 "
             + "358.25,131.25 362.25,132.75 362.25,132.75 "
             + "362.25,132.75 365.25,134.50 365.25,134.50 "
             + "365.25,134.50 368.50,136.00 368.50,136.00 "
             + "368.50,136.00 372.00,137.75 372.00,137.75 "
             + "372.00,137.75 375.25,140.00 375.25,140.00 "
             + "375.25,140.00 378.50,142.25 378.50,142.25 "
             + "378.50,142.25 381.00,144.50 381.00,144.50 "
             + "381.00,144.50 384.50,147.25 384.50,147.25 "
             + "384.50,147.25 387.50,149.50 387.50,149.50 "
             + "387.50,149.50 389.75,151.25 389.75,151.25 "
             + "389.75,151.25 391.75,153.75 391.75,153.75 "
             + "391.75,153.75 393.25,156.00 393.25,156.00 "
             + "393.25,156.00 394.25,158.50 394.25,158.50 "
             + "394.25,158.50 395.75,160.25 395.75,160.25 "
             + "395.75,160.25 395.75,162.00 395.75,162.00 "
             + "395.75,162.00 397.00,165.00 397.00,165.00 "
             + "397.00,165.00 397.00,167.75 397.00,167.75 "
             + "397.00,167.75 396.25,170.00 396.25,170.00 "
             + "396.25,170.00 394.00,171.50 394.00,171.50 "
             + "394.00,171.50 390.25,172.25 390.25,172.25 "
             + "390.25,172.25 386.50,173.00 386.50,173.00 "
             + "386.50,173.00 383.00,173.25 383.00,173.25 "
             + "383.00,173.25 379.50,173.25 379.50,173.25 "
             + "379.50,173.25 376.00,174.00 376.00,174.00 "
             + "376.00,174.00 370.25,175.00 370.25,175.00 "
             + "370.25,175.00 365.25,176.50 365.25,176.50 "
             + "365.25,176.50 360.00,179.00 360.00,179.00 "
             + "360.00,179.00 354.50,181.75 354.50,181.75 "
             + "354.50,181.75 349.25,184.75 349.25,184.75 "
             + "349.25,184.75 344.50,187.25 344.50,187.25 "
             + "344.50,187.25 338.50,189.25 338.50,189.25 "
             + "338.50,189.25 332.25,192.75 332.25,192.75 "
             + "332.25,192.75 326.50,193.75 326.50,193.75 "
             + "326.50,193.75 322.25,195.00 322.25,195.00 "
             + "322.25,195.00 319.00,195.00 319.00,195.00 "
             + "319.00,195.00 317.00,193.50 317.00,193.50 "
             + "317.00,193.50 315.75,191.50 315.75,191.50 "
             + "315.75,191.50 315.25,188.75 315.25,188.75 "
             + "315.25,188.75 315.50,185.50 315.50,185.50 "
             + "315.50,185.50 316.50,182.75 316.50,182.75 "
             + "316.50,182.75 318.00,181.00 318.00,181.00 "
             + "318.00,181.00 319.75,179.00 319.75,179.00 "
             + "319.75,179.00 322.00,176.75 322.00,176.75 "
             + "322.00,176.75 323.50,174.75 323.50,174.75 "
             + "323.50,174.75 325.75,172.25 325.75,172.25 "
             + "325.75,172.25 327.00,170.00 327.00,170.00 "
             + "327.00,170.00 328.25,167.25 328.25,167.25 "
             + "328.25,167.25 328.00,164.50 328.00,164.50 "
             + "328.00,164.50 328.00,161.50 328.00,161.50 "
             + "328.00,161.50 326.50,158.50 326.50,158.50 "
             + "326.50,158.50 324.75,156.25 324.75,156.25 "
             + "324.75,156.25 322.00,153.25 322.00,153.25 "
             + "322.00,153.25 319.75,151.00 319.75,151.00 "
             + "319.75,151.00 316.50,148.00 316.50,148.00 "
             + "316.50,148.00 313.50,145.25 313.50,145.25 "
             + "313.50,145.25 311.25,141.50 311.25,141.50 "
             + "311.25,141.50 309.00,138.25 309.00,138.25 "
             + "309.00,138.25 308.75,134.50 308.75,134.50 "
             + "308.75,134.50 309.50,130.75 309.50,130.75 "
             + "309.50,130.75 310.75,128.75 310.75,128.75 "
             + "310.75,128.75 312.25,126.00 312.25,126.00 "
             + "312.25,126.00 314.75,124.25 314.75,124.25 "
             + "314.75,124.25 316.75,123.00 316.75,123.00 "
             + "316.75,123.00 319.75,121.75 319.75,121.75 "
             + "319.75,121.75 323.25,121.75 323.25,121.75Z ")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }

	    }
	    else if (cellType == cellTypeArray[cellPos + 1]) {
	    
	    if (proteinLocalization == bacteriaArray[bactPos]) {

	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "cytosol_bact")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 202.00,155.21 "
           + "C 202.00,155.21 218.00,156.00 218.00,156.00 "
             + "218.00,156.00 261.00,156.00 261.00,156.00 "
             + "261.00,156.00 276.00,157.00 276.00,157.00 "
             + "276.00,157.00 295.00,157.00 295.00,157.00 "
             + "295.00,157.00 312.00,156.00 312.00,156.00 "
             + "312.00,156.00 327.00,157.00 327.00,157.00 "
             + "341.35,157.02 358.85,158.80 372.00,164.79 "
             + "378.16,167.60 384.87,171.67 389.67,176.46 "
             + "398.26,185.03 404.25,202.16 396.49,213.00 "
             + "393.41,217.31 388.55,220.64 384.00,223.25 "
             + "377.95,226.72 368.76,229.07 362.00,231.00 "
             + "342.23,236.65 316.55,239.76 296.00,240.00 "
             + "296.00,240.00 281.00,241.00 281.00,241.00 "
             + "236.56,241.07 190.17,240.48 148.00,224.58 "
             + "135.04,219.69 115.13,210.30 109.36,197.00 "
             + "107.33,192.33 106.90,187.03 107.01,182.00 "
             + "107.15,176.27 108.39,170.38 113.10,166.63 "
             + "122.67,159.03 148.75,156.02 161.00,156.00 "
             + "165.73,155.99 168.22,156.10 173.00,155.21 "
             + "173.00,155.21 202.00,155.21 202.00,155.21 Z "
           + "M 234.59,183.30 "
           + "C 232.44,181.09 233.25,177.79 230.57,176.72 "
             + "228.37,175.64 225.14,177.28 220.00,176.72 "
             + "220.00,176.72 209.00,175.18 209.00,175.18 "
             + "203.92,175.26 198.38,178.55 198.07,184.00 "
             + "197.63,185.74 198.24,187.31 198.07,189.00 "
             + "198.07,189.00 198.07,198.00 198.07,198.00 "
             + "191.57,194.73 184.99,195.55 180.00,190.20 "
             + "182.82,190.24 191.28,192.76 192.87,190.20 "
             + "194.11,188.56 192.42,186.52 190.77,185.74 "
             + "188.90,184.85 186.33,185.22 184.21,183.98 "
             + "181.20,182.22 179.86,177.79 175.99,176.66 "
             + "169.34,174.71 168.36,183.64 168.00,188.00 "
             + "165.53,186.74 162.08,184.78 159.23,185.83 "
             + "154.95,187.39 155.56,196.59 156.89,199.98 "
             + "158.58,204.29 163.23,206.69 167.00,209.00 "
             + "175.79,201.71 175.39,209.07 180.00,203.00 "
             + "182.15,205.15 190.29,214.03 192.09,214.97 "
             + "196.00,217.02 199.43,214.46 201.58,214.42 "
             + "204.02,214.38 205.62,216.31 209.00,216.74 "
             + "212.29,217.15 215.54,215.66 218.00,215.89 "
             + "222.38,216.30 223.87,219.92 229.00,220.77 "
             + "235.30,221.82 238.98,217.99 243.00,217.29 "
             + "247.69,216.48 249.75,219.88 260.00,220.00 "
             + "263.25,220.03 269.09,220.25 271.98,219.11 "
             + "276.17,217.46 276.61,214.52 279.26,213.30 "
             + "279.26,213.30 288.00,211.96 288.00,211.96 "
             + "288.00,211.96 297.00,209.06 297.00,209.06 "
             + "302.46,208.64 305.01,215.14 313.00,214.73 "
             + "320.99,214.32 322.75,207.59 331.00,209.06 "
             + "338.97,210.49 337.62,217.61 343.90,216.46 "
             + "350.10,215.33 348.68,205.44 351.59,202.75 "
             + "353.82,200.70 358.20,201.78 361.00,202.00 "
             + "361.00,202.00 361.00,185.00 361.00,185.00 "
             + "352.42,185.59 355.60,185.20 349.00,181.00 "
             + "349.00,181.00 348.00,185.00 348.00,185.00 "
             + "346.72,183.82 345.50,182.52 344.00,181.61 "
             + "338.51,178.32 335.09,183.53 330.00,184.44 "
             + "330.00,184.44 321.00,184.44 321.00,184.44 "
             + "315.31,184.82 308.07,187.41 303.00,190.00 "
             + "303.00,190.00 304.00,181.00 304.00,181.00 "
             + "290.14,181.01 294.59,183.50 287.00,184.93 "
             + "287.00,184.93 280.00,184.93 280.00,184.93 "
             + "270.16,185.78 265.96,188.22 259.00,195.00 "
             + "255.80,186.17 248.86,189.76 242.00,192.00 "
             + "242.00,192.00 244.00,187.00 244.00,187.00 "
             + "241.38,186.24 236.44,185.19 234.59,183.30 Z "
           + "M 177.00,185.00 "
           + "C 177.00,185.00 173.00,186.00 173.00,186.00 "
             + "173.00,186.00 174.00,181.00 174.00,181.00 "
             + "174.00,181.00 177.00,185.00 177.00,185.00 Z "
           + "M 297.00,192.00 "
           + "C 294.77,188.27 295.67,187.41 298.00,184.00 "
             + "298.00,184.00 297.00,192.00 297.00,192.00 Z "
           + "M 342.00,185.00 "
           + "C 342.00,185.00 343.00,188.00 343.00,188.00 "
             + "343.00,188.00 337.00,189.00 337.00,189.00 "
             + "337.00,189.00 342.00,185.00 342.00,185.00 Z "
           + "M 207.00,187.00 "
           + "C 206.87,192.11 206.91,193.44 203.00,197.00 "
             + "203.00,197.00 205.00,187.00 205.00,187.00 "
             + "205.00,187.00 207.00,187.00 207.00,187.00 Z "
           + "M 289.00,188.00 "
           + "C 286.95,193.71 286.28,194.83 281.00,198.00 "
             + "281.00,198.00 277.00,189.00 277.00,189.00 "
             + "277.00,189.00 289.00,188.00 289.00,188.00 Z "
           + "M 166.00,201.00 "
           + "C 159.88,198.64 161.00,194.74 161.00,189.00 "
             + "166.02,193.06 165.94,194.86 166.00,201.00 Z "
           + "M 229.00,189.00 "
           + "C 222.81,197.24 211.00,203.72 201.00,206.00 "
             + "201.00,206.00 201.00,202.00 201.00,202.00 "
             + "201.00,202.00 208.00,203.00 208.00,203.00 "
             + "208.00,203.00 208.00,199.00 208.00,199.00 "
             + "218.80,196.70 214.47,189.71 229.00,189.00 Z "
           + "M 321.56,190.88 "
           + "C 324.15,192.86 323.86,198.14 320.70,199.23 "
             + "316.95,200.53 304.56,196.56 314.06,190.88 "
             + "316.39,190.17 319.39,189.48 321.56,190.88 Z "
           + "M 358.00,196.00 "
           + "C 358.00,196.00 352.00,196.00 352.00,196.00 "
             + "352.00,196.00 356.00,190.00 356.00,190.00 "
             + "356.00,190.00 358.00,196.00 358.00,196.00 Z "
           + "M 274.00,192.00 "
           + "C 274.00,192.00 277.00,200.00 277.00,200.00 "
             + "277.00,200.00 272.00,200.00 272.00,200.00 "
             + "272.00,200.00 272.00,192.00 272.00,192.00 "
             + "272.00,192.00 274.00,192.00 274.00,192.00 Z "
           + "M 254.00,193.00 "
           + "C 254.00,193.00 253.00,197.00 253.00,197.00 "
             + "253.00,197.00 249.00,193.00 249.00,193.00 "
             + "249.00,193.00 254.00,193.00 254.00,193.00 Z "
           + "M 267.00,194.00 "
           + "C 267.00,194.00 267.00,201.00 267.00,201.00 "
             + "267.00,201.00 277.00,204.00 277.00,204.00 "
             + "269.94,205.24 267.65,204.83 261.00,202.00 "
             + "261.00,202.00 265.00,194.00 265.00,194.00 "
             + "265.00,194.00 267.00,194.00 267.00,194.00 Z "
           + "M 234.00,195.00 "
           + "C 234.00,195.00 235.00,199.00 235.00,199.00 "
             + "235.00,199.00 230.00,197.00 230.00,197.00 "
             + "230.00,197.00 234.00,195.00 234.00,195.00 Z "
           + "M 248.00,199.00 "
           + "C 248.00,199.00 244.00,203.00 244.00,203.00 "
             + "244.00,203.00 243.00,198.00 243.00,198.00 "
             + "243.00,198.00 248.00,199.00 248.00,199.00 Z "
           + "M 176.00,200.00 "
           + "C 176.00,200.00 173.00,203.00 173.00,203.00 "
             + "173.00,203.00 173.00,199.00 173.00,199.00 "
             + "173.00,199.00 176.00,200.00 176.00,200.00 Z "
           + "M 197.00,212.00 "
           + "C 197.00,212.00 184.00,199.00 184.00,199.00 "
             + "193.24,199.03 199.39,201.13 197.00,212.00 Z "
           + "M 206.00,211.00 "
           + "C 210.25,205.61 213.05,204.82 219.00,202.00 "
             + "222.50,211.69 212.03,211.00 206.00,211.00 Z "
           + "M 232.89,205.65 "
           + "C 233.76,206.33 234.63,207.15 235.22,208.05 "
             + "240.61,216.82 223.00,219.28 225.69,208.05 "
             + "226.12,206.21 227.13,204.60 228.00,203.00 "
             + "229.69,203.77 231.42,204.48 232.89,205.65 Z "
           + "M 319.00,204.00 "
           + "C 315.88,208.72 313.12,210.29 308.00,207.00 "
             + "308.00,207.00 319.00,204.00 319.00,204.00 Z "
           + "M 274.00,210.00 "
           + "C 272.98,211.76 272.57,212.84 270.78,214.25 "
             + "266.74,216.82 255.33,216.55 251.02,214.25 "
             + "248.43,213.16 247.73,212.14 246.00,210.00 "
             + "256.24,205.03 263.62,206.99 274.00,210.00 Z")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }
	        else if (proteinLocalization == bacteriaArray[bactPos + 1]) {

	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "extraCell_bact")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 498.00,2.00 "
           + "C 498.00,2.00 499.00,20.00 499.00,20.00 "
             + "499.00,20.00 499.00,262.00 499.00,262.00 "
             + "499.00,262.00 500.00,277.00 500.00,277.00 "
             + "500.00,277.00 500.00,399.00 500.00,399.00 "
             + "500.00,399.00 1.96,399.00 1.96,399.00 "
             + "1.96,399.00 1.96,387.00 1.96,387.00 "
             + "1.96,387.00 1.00,375.00 1.00,375.00 "
             + "1.00,375.00 1.00,2.00 1.00,2.00 "
             + "1.00,2.00 498.00,2.00 498.00,2.00 Z "
           + "M 233.35,113.00 "
           + "C 234.33,120.19 229.88,125.42 228.00,132.00 "
             + "234.19,130.94 235.47,125.72 235.91,120.00 "
             + "236.63,110.40 230.85,98.72 227.00,90.00 "
             + "225.01,96.22 232.39,106.00 233.35,113.00 Z "
           + "M 163.00,99.00 "
           + "C 155.41,112.92 160.64,120.73 168.00,133.00 "
             + "168.00,133.00 148.00,134.00 148.00,134.00 "
             + "151.33,129.94 143.14,125.35 140.00,124.00 "
             + "140.00,124.00 146.00,135.00 146.00,135.00 "
             + "131.65,135.66 111.32,141.16 99.00,148.45 "
             + "94.68,151.01 92.00,152.99 88.92,157.01 "
             + "87.05,159.46 85.35,163.23 81.96,163.64 "
             + "80.17,163.86 75.98,162.38 74.00,161.90 "
             + "68.21,160.49 66.07,160.80 60.00,158.12 "
             + "60.00,158.12 49.00,152.00 49.00,152.00 "
             + "56.51,162.39 61.40,161.19 72.00,165.09 "
             + "72.00,165.09 83.00,170.00 83.00,170.00 "
             + "83.00,170.00 85.00,166.00 85.00,166.00 "
             + "85.00,166.00 82.33,172.00 82.33,172.00 "
             + "82.33,172.00 82.33,196.00 82.33,196.00 "
             + "82.33,196.00 84.00,206.00 84.00,206.00 "
             + "77.34,206.00 66.73,206.60 61.00,210.00 "
             + "61.00,210.00 79.00,209.26 79.00,209.26 "
             + "82.30,209.36 84.87,211.01 87.00,208.00 "
             + "89.89,215.14 92.87,216.45 97.71,222.00 "
             + "99.44,223.97 102.58,227.33 102.77,230.00 "
             + "102.97,232.78 98.41,240.08 97.00,243.00 "
             + "99.98,241.38 106.75,235.55 106.81,232.00 "
             + "106.84,230.25 105.82,229.32 105.00,228.00 "
             + "116.15,237.66 122.73,240.37 136.00,246.00 "
             + "134.02,248.78 131.69,252.30 128.91,254.30 "
             + "124.68,257.35 122.04,255.87 119.00,261.00 "
             + "119.00,261.00 132.99,255.44 132.99,255.44 "
             + "132.99,255.44 141.09,248.92 141.09,248.92 "
             + "141.09,248.92 149.00,250.58 149.00,250.58 "
             + "149.00,250.58 167.00,255.00 167.00,255.00 "
             + "167.00,255.00 158.12,272.00 158.12,272.00 "
             + "158.12,272.00 150.00,289.00 150.00,289.00 "
             + "155.12,285.72 156.49,278.89 159.68,274.00 "
             + "163.48,268.16 170.92,263.42 171.00,256.00 "
             + "176.40,257.97 182.33,258.96 188.00,259.92 "
             + "190.57,260.36 195.56,260.89 197.40,262.73 "
             + "199.44,264.76 199.01,269.28 199.00,272.00 "
             + "198.95,282.18 196.49,282.20 194.00,291.00 "
             + "201.34,284.70 200.11,279.32 201.30,271.00 "
             + "201.30,271.00 203.00,262.00 203.00,262.00 "
             + "203.00,262.00 219.00,264.83 219.00,264.83 "
             + "221.20,265.05 224.76,264.78 226.57,266.02 "
             + "229.56,268.08 228.58,272.31 229.63,276.00 "
             + "230.99,280.74 235.93,287.72 236.22,292.00 "
             + "237.34,299.47 231.95,305.99 236.22,313.00 "
             + "236.01,300.88 239.83,296.07 238.79,289.00 "
             + "238.18,284.85 235.49,280.90 233.88,277.00 "
             + "232.63,273.99 231.08,269.32 234.43,266.95 "
             + "236.89,265.34 241.22,266.57 244.00,266.95 "
             + "248.13,267.22 262.65,267.88 266.00,266.95 "
             + "266.00,274.49 263.53,284.28 271.00,289.00 "
             + "268.27,281.10 264.01,267.24 277.00,266.92 "
             + "277.00,266.92 289.00,266.92 289.00,266.92 "
             + "289.00,266.92 303.00,265.09 303.00,265.09 "
             + "314.39,264.31 326.35,264.48 337.00,260.00 "
             + "337.00,260.00 333.00,262.00 333.00,262.00 "
             + "335.80,270.40 336.92,275.01 335.82,284.00 "
             + "334.95,291.11 331.19,298.92 334.00,306.00 "
             + "334.46,295.96 337.21,291.55 338.56,283.00 "
             + "340.06,273.55 339.73,270.19 338.00,261.00 "
             + "338.00,261.00 362.96,255.97 362.96,255.97 "
             + "362.96,255.97 369.17,253.32 369.17,253.32 "
             + "369.17,253.32 378.00,250.95 378.00,250.95 "
             + "378.00,250.95 395.00,245.00 395.00,245.00 "
             + "396.15,250.71 396.75,259.86 402.00,263.00 "
             + "402.00,263.00 399.39,255.00 399.39,255.00 "
             + "399.39,255.00 398.00,243.00 398.00,243.00 "
             + "398.00,243.00 394.00,244.00 394.00,244.00 "
             + "398.21,240.18 399.02,242.98 405.00,238.47 "
             + "410.80,234.09 422.39,220.06 424.36,213.00 "
             + "425.27,209.76 424.65,206.33 425.00,203.00 "
             + "426.92,207.77 437.84,209.42 442.00,207.00 "
             + "442.00,207.00 434.00,205.10 434.00,205.10 "
             + "434.00,205.10 424.00,202.00 424.00,202.00 "
             + "423.99,186.46 419.81,181.41 414.00,168.00 "
             + "423.96,167.19 433.16,164.90 436.00,154.00 "
             + "436.00,154.00 429.83,159.20 429.83,159.20 "
             + "425.07,162.77 416.85,163.87 411.00,164.00 "
             + "411.00,164.00 411.00,165.00 411.00,165.00 "
             + "411.00,165.00 413.00,167.00 413.00,167.00 "
             + "405.61,158.46 403.75,154.27 393.00,149.00 "
             + "393.00,149.00 404.00,141.18 404.00,141.18 "
             + "404.00,141.18 418.00,135.00 418.00,135.00 "
             + "410.25,135.19 395.81,141.07 389.00,145.00 "
             + "389.00,145.00 389.00,147.00 389.00,147.00 "
             + "389.00,147.00 392.00,149.00 392.00,149.00 "
             + "381.15,141.87 378.48,143.06 367.00,139.88 "
             + "353.07,136.02 338.50,134.01 324.00,134.00 "
             + "327.17,117.12 342.43,114.48 349.00,110.00 "
             + "335.33,111.15 320.83,118.85 320.00,134.00 "
             + "320.00,134.00 323.00,135.00 323.00,135.00 "
             + "323.00,135.00 299.00,134.00 299.00,134.00 "
             + "301.16,123.31 306.59,111.87 293.00,106.00 "
             + "293.00,106.00 299.09,117.00 299.09,117.00 "
             + "299.09,117.00 294.00,134.00 294.00,134.00 "
             + "294.00,134.00 297.00,135.00 297.00,135.00 "
             + "283.76,132.63 269.43,134.63 256.00,134.13 "
             + "256.00,134.13 247.00,133.09 247.00,133.09 "
             + "247.00,133.09 234.00,132.41 234.00,132.41 "
             + "234.00,132.41 228.00,132.41 228.00,132.41 "
             + "228.00,132.41 215.00,131.12 215.00,131.12 "
             + "215.00,131.12 204.17,131.12 204.17,131.12 "
             + "198.64,129.56 196.74,122.65 195.00,118.00 "
             + "193.63,123.84 195.71,126.33 197.00,132.00 "
             + "197.00,132.00 173.00,133.00 173.00,133.00 "
             + "170.06,125.49 161.09,118.32 161.20,110.00 "
             + "161.24,106.45 163.58,102.29 165.00,99.00 "
             + "165.00,99.00 163.00,99.00 163.00,99.00 Z "
           + "M 94.00,121.95 "
           + "C 90.46,119.69 87.31,116.93 83.00,118.00 "
             + "92.92,124.60 104.61,131.28 107.00,144.00 "
             + "107.00,144.00 111.00,143.00 111.00,143.00 "
             + "109.43,133.42 101.84,126.95 94.00,121.95 Z "
           + "M 136.00,120.00 "
           + "C 136.00,120.00 137.00,121.00 137.00,121.00 "
             + "137.00,121.00 137.00,120.00 137.00,120.00 "
             + "137.00,120.00 136.00,120.00 136.00,120.00 Z "
           + "M 137.00,121.00 "
           + "C 137.00,121.00 138.00,122.00 138.00,122.00 "
             + "138.00,122.00 138.00,121.00 138.00,121.00 "
             + "138.00,121.00 137.00,121.00 137.00,121.00 Z "
           + "M 365.00,139.00 "
           + "C 365.00,139.00 369.00,140.00 369.00,140.00 "
             + "372.16,130.44 370.20,130.04 370.00,121.00 "
             + "370.00,121.00 365.00,139.00 365.00,139.00 Z "
           + "M 138.00,122.00 "
           + "C 138.00,122.00 139.00,123.00 139.00,123.00 "
             + "139.00,123.00 139.00,122.00 139.00,122.00 "
             + "139.00,122.00 138.00,122.00 138.00,122.00 Z "
           + "M 139.00,123.00 "
           + "C 139.00,123.00 140.00,124.00 140.00,124.00 "
             + "140.00,124.00 140.00,123.00 140.00,123.00 "
             + "140.00,123.00 139.00,123.00 139.00,123.00 Z "
           + "M 259.00,123.00 "
           + "C 256.11,127.86 256.07,128.43 256.00,134.00 "
             + "256.00,134.00 258.00,134.00 258.00,134.00 "
             + "258.00,134.00 261.00,123.00 261.00,123.00 "
             + "261.00,123.00 259.00,123.00 259.00,123.00 Z "
           + "M 86.00,206.00 "
           + "C 86.00,206.00 85.00,207.00 85.00,207.00 "
             + "85.00,207.00 85.00,206.00 85.00,206.00 "
             + "85.00,206.00 86.00,206.00 86.00,206.00 Z "
           + "M 429.00,225.40 "
           + "C 423.95,222.97 420.29,221.88 417.00,227.00 "
             + "422.60,227.26 428.39,228.08 432.99,231.56 "
             + "438.50,235.73 438.53,239.21 445.00,243.00 "
             + "441.81,236.47 435.63,228.59 429.00,225.40 Z "
           + "M 368.00,254.00 "
           + "C 368.00,254.00 371.36,264.00 371.36,264.00 "
             + "371.36,264.00 372.00,275.00 372.00,275.00 "
             + "373.63,266.87 375.72,261.03 372.00,253.00 "
             + "372.00,253.00 368.00,254.00 368.00,254.00 Z "
           + "M 299.00,266.00 "
           + "C 299.53,269.91 300.98,275.38 300.79,279.00 "
             + "300.48,285.13 297.82,294.50 300.00,300.00 "
             + "300.65,286.10 305.60,285.73 303.00,266.00 "
             + "303.00,266.00 299.00,266.00 299.00,266.00 Z")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }
	        else if (proteinLocalization == bacteriaArray[bactPos + 2]) {
	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "fimbrium")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 255.20,134.60 "
           + "C 255.20,134.60 258.40,134.80 258.40,134.80 "
             + "258.40,134.80 258.40,127.80 258.40,127.80 "
             + "258.40,127.80 261.20,122.40 261.20,122.40 "
             + "261.20,122.40 258.40,124.20 258.40,124.20 "
             + "258.40,124.20 255.80,128.60 255.80,128.60 "
             + "255.80,128.60 255.40,134.80 255.40,134.80M 225.80,133.60 "
           + "C 225.80,133.60 231.40,133.20 231.40,133.20 "
             + "231.40,133.20 233.80,128.00 233.80,128.00 "
             + "233.80,128.00 235.60,122.60 235.60,122.60 "
             + "235.60,122.60 235.60,113.00 235.60,113.00 "
             + "235.60,113.00 234.60,109.80 234.60,109.80 "
             + "234.60,109.80 233.00,104.20 233.00,104.20 "
             + "233.00,104.20 230.00,98.00 230.00,98.00 "
             + "230.00,98.00 228.20,93.00 228.20,93.00 "
             + "228.20,93.00 226.80,88.40 226.80,88.40 "
             + "226.80,88.40 226.00,92.40 226.00,92.40 "
             + "226.00,92.40 227.80,96.80 227.80,96.80 "
             + "227.80,96.80 229.20,101.80 229.20,101.80 "
             + "229.20,101.80 232.00,106.20 232.00,106.20 "
             + "232.00,106.20 233.60,113.60 233.60,113.60 "
             + "233.60,113.60 233.60,118.20 233.60,118.20 "
             + "233.60,118.20 232.20,122.60 232.20,122.60 "
             + "232.20,122.60 226.40,134.00 226.40,134.00M 197.20,132.40 "
           + "C 197.20,132.40 202.80,132.00 202.80,132.00 "
             + "202.80,132.00 196.80,124.80 196.80,124.80 "
             + "196.80,124.80 195.20,120.60 195.20,120.60 "
             + "195.20,120.60 197.00,116.60 197.00,116.60 "
             + "197.00,116.60 194.20,118.80 194.20,118.80 "
             + "194.20,118.80 194.20,122.40 194.20,122.40 "
             + "194.20,122.40 195.80,127.40 195.80,127.40 "
             + "195.80,127.40 197.80,133.00 197.80,133.00M 167.60,133.20 "
           + "C 167.60,133.20 174.00,132.80 174.00,132.80 "
             + "174.00,132.80 166.20,122.80 166.20,122.80 "
             + "166.20,122.80 161.60,115.40 161.60,115.40 "
             + "161.60,115.40 160.80,107.60 160.80,107.60 "
             + "160.80,107.60 163.00,102.80 163.00,102.80 "
             + "163.00,102.80 165.40,98.40 165.40,98.40 "
             + "165.40,98.40 162.60,99.80 162.60,99.80 "
             + "162.60,99.80 160.20,104.20 160.20,104.20 "
             + "160.20,104.20 159.00,111.80 159.00,111.80 "
             + "159.00,111.80 160.40,119.00 160.40,119.00 "
             + "160.40,119.00 163.00,124.20 163.00,124.20 "
             + "163.00,124.20 168.60,133.40 168.60,133.40M 145.80,134.80 "
           + "C 145.80,134.80 151.00,134.60 151.00,134.60 "
             + "151.00,134.60 147.40,128.80 147.40,128.80 "
             + "147.40,128.80 139.60,123.00 139.60,123.00 "
             + "139.60,123.00 136.00,119.00 136.00,119.00 "
             + "136.00,119.00 134.80,118.60 134.80,118.60 "
             + "134.80,118.60 141.00,126.00 141.00,126.00 "
             + "141.00,126.00 144.20,129.60 144.20,129.60 "
             + "144.20,129.60 146.80,134.80 146.80,134.80M 106.60,145.80 "
           + "C 106.60,145.80 111.40,143.40 111.40,143.40 "
             + "111.40,143.40 109.80,137.80 109.80,137.80 "
             + "109.80,137.80 107.60,134.00 107.60,134.00 "
             + "107.60,134.00 102.80,129.20 102.80,129.20 "
             + "102.80,129.20 97.60,124.40 97.60,124.40 "
             + "97.60,124.40 92.80,121.60 92.80,121.60 "
             + "92.80,121.60 88.80,118.80 88.80,118.80 "
             + "88.80,118.80 85.20,117.40 85.20,117.40 "
             + "85.20,117.40 79.40,115.40 79.40,115.40 "
             + "79.40,115.40 87.20,120.60 87.20,120.60 "
             + "87.20,120.60 94.00,124.60 94.00,124.60 "
             + "94.00,124.60 99.40,129.40 99.40,129.40 "
             + "99.40,129.40 103.80,134.80 103.80,134.80 "
             + "103.80,134.80 106.60,139.60 106.60,139.60 "
             + "106.60,139.60 107.00,145.80 107.00,145.80M 83.20,171.40 "
           + "C 83.20,171.40 85.20,166.00 85.20,166.00 "
             + "85.20,166.00 78.80,163.40 78.80,163.40 "
             + "78.80,163.40 73.00,161.60 73.00,161.60 "
             + "73.00,161.60 68.80,161.00 68.80,161.00 "
             + "68.80,161.00 64.60,160.20 64.60,160.20 "
             + "64.60,160.20 61.60,159.00 61.60,159.00 "
             + "61.60,159.00 58.40,157.80 58.40,157.80 "
             + "58.40,157.80 55.40,156.40 55.40,156.40 "
             + "55.40,156.40 53.20,155.20 53.20,155.20 "
             + "53.20,155.20 50.40,152.20 50.40,152.20 "
             + "50.40,152.20 48.60,152.20 48.60,152.20 "
             + "48.60,152.20 55.00,158.60 55.00,158.60 "
             + "55.00,158.60 59.60,161.20 59.60,161.20 "
             + "59.60,161.20 66.20,163.40 66.20,163.40 "
             + "66.20,163.40 72.80,164.80 72.80,164.80 "
             + "72.80,164.80 84.00,171.20 84.00,171.20M 85.00,205.00 "
           + "C 85.00,205.00 88.40,210.60 88.40,210.60 "
             + "88.40,210.60 79.60,209.00 79.60,209.00 "
             + "79.60,209.00 73.20,209.60 73.20,209.60 "
             + "73.20,209.60 68.20,208.80 68.20,208.80 "
             + "68.20,208.80 63.80,210.00 63.80,210.00 "
             + "63.80,210.00 59.40,210.20 59.40,210.20 "
             + "59.40,210.20 65.20,208.20 65.20,208.20 "
             + "65.20,208.20 70.60,206.80 70.60,206.80 "
             + "70.60,206.80 85.60,205.60 85.60,205.60M 104.80,228.00 "
           + "C 104.80,228.00 109.20,230.60 109.20,230.60 "
             + "109.20,230.60 98.40,242.80 98.40,242.80 "
             + "98.40,242.80 97.00,243.20 97.00,243.20 "
             + "97.00,243.20 105.20,228.20 105.20,228.20M 136.00,245.40 "
           + "C 136.00,245.40 140.20,247.00 140.20,247.00 "
             + "140.20,247.00 135.00,253.80 135.00,253.80 "
             + "135.00,253.80 132.20,256.40 132.20,256.40 "
             + "132.20,256.40 125.20,258.40 125.20,258.40 "
             + "125.20,258.40 117.80,261.20 117.80,261.20 "
             + "117.80,261.20 121.20,257.60 121.20,257.60 "
             + "121.20,257.60 126.20,256.20 126.20,256.20 "
             + "126.20,256.20 130.40,254.20 130.40,254.20 "
             + "130.40,254.20 136.60,245.60 136.60,245.60M 167.60,255.00 "
           + "C 167.60,255.00 172.40,256.20 172.40,256.20 "
             + "172.40,256.20 170.00,261.20 170.00,261.20 "
             + "170.00,261.20 165.40,266.20 165.40,266.20 "
             + "165.40,266.20 162.00,271.00 162.00,271.00 "
             + "162.00,271.00 159.20,273.40 159.20,273.40 "
             + "159.20,273.40 157.40,278.20 157.40,278.20 "
             + "157.40,278.20 154.80,282.80 154.80,282.80 "
             + "154.80,282.80 153.00,286.00 153.00,286.00 "
             + "153.00,286.00 151.20,289.00 151.20,289.00 "
             + "151.20,289.00 149.80,289.40 149.80,289.40M 155.00,278.80 "
           + "C 155.00,278.80 157.40,273.60 157.40,273.60 "
             + "157.40,273.60 160.60,267.80 160.60,267.80 "
             + "160.60,267.80 168.40,255.20 168.40,255.20M 198.80,261.40 "
           + "C 198.80,261.40 203.20,262.20 203.20,262.20 "
             + "203.20,262.20 201.40,269.20 201.40,269.20 "
             + "201.40,269.20 201.20,274.80 201.20,274.80 "
             + "201.20,274.80 201.20,278.80 201.20,278.80 "
             + "201.20,278.80 199.40,281.80 199.40,281.80 "
             + "199.40,281.80 199.00,285.00 199.00,285.00 "
             + "199.00,285.00 196.00,289.40 196.00,289.40 "
             + "196.00,289.40 193.20,292.20 193.20,292.20 "
             + "193.20,292.20 195.80,286.20 195.80,286.20 "
             + "195.80,286.20 198.80,279.20 198.80,279.20 "
             + "198.80,279.20 198.60,273.40 198.60,273.40 "
             + "198.60,273.40 199.00,261.00 199.00,261.00M 228.40,265.40 "
           + "C 228.40,265.40 232.80,265.40 232.80,265.40 "
             + "232.80,265.40 231.80,272.60 231.80,272.60 "
             + "231.80,272.60 235.20,280.80 235.20,280.80 "
             + "235.20,280.80 238.60,287.40 238.60,287.40 "
             + "238.60,287.40 239.20,293.80 239.20,293.80 "
             + "239.20,293.80 238.00,297.60 238.00,297.60 "
             + "238.00,297.60 237.00,301.60 237.00,301.60 "
             + "237.00,301.60 236.00,305.20 236.00,305.20 "
             + "236.00,305.20 235.60,308.60 235.60,308.60 "
             + "235.60,308.60 235.80,313.60 235.80,313.60 "
             + "235.80,313.60 235.60,313.80 235.60,313.80 "
             + "235.60,313.80 234.00,308.40 234.00,308.40 "
             + "234.00,308.40 236.00,299.40 236.00,299.40 "
             + "236.00,299.40 237.00,291.40 237.00,291.40 "
             + "237.00,291.40 235.00,286.80 235.00,286.80 "
             + "235.00,286.80 232.00,281.20 232.00,281.20 "
             + "232.00,281.20 229.20,275.60 229.20,275.60 "
             + "229.20,275.60 228.40,265.40 228.40,265.40M 265.80,267.00 "
           + "C 265.80,267.00 270.00,267.00 270.00,267.00 "
             + "270.00,267.00 268.40,273.80 268.40,273.80 "
             + "268.40,273.80 268.00,278.60 268.00,278.60 "
             + "268.00,278.60 267.60,281.20 267.60,281.20 "
             + "267.60,281.20 268.40,283.20 268.40,283.20 "
             + "268.40,283.20 270.40,287.40 270.40,287.40 "
             + "270.40,287.40 270.80,288.40 270.80,288.40 "
             + "270.80,288.40 270.20,290.40 270.20,290.40 "
             + "270.20,290.40 268.20,286.40 268.20,286.40 "
             + "268.20,286.40 266.00,283.00 266.00,283.00 "
             + "266.00,283.00 265.40,279.80 265.40,279.80 "
             + "265.40,279.80 266.00,267.20 266.00,267.20M 298.40,264.60 "
           + "C 298.40,264.60 303.20,264.60 303.20,264.60 "
             + "303.20,264.60 303.60,272.20 303.60,272.20 "
             + "303.60,272.20 304.20,277.00 304.20,277.00 "
             + "304.20,277.00 303.00,280.00 303.00,280.00 "
             + "303.00,280.00 303.40,284.40 303.40,284.40 "
             + "303.40,284.40 302.20,287.80 302.20,287.80 "
             + "302.20,287.80 301.00,291.40 301.00,291.40 "
             + "301.00,291.40 300.20,296.20 300.20,296.20 "
             + "300.20,296.20 300.20,300.60 300.20,300.60 "
             + "300.20,300.60 298.80,298.80 298.80,298.80 "
             + "298.80,298.80 298.80,294.00 298.80,294.00 "
             + "298.80,294.00 300.00,288.40 300.00,288.40 "
             + "300.00,288.40 300.60,281.20 300.60,281.20 "
             + "300.60,281.20 300.60,274.40 300.60,274.40 "
             + "300.60,274.40 298.80,264.80 298.80,264.80M 333.20,261.00 "
           + "C 333.20,261.00 337.20,260.00 337.20,260.00 "
             + "337.20,260.00 339.20,265.60 339.20,265.60 "
             + "339.20,265.60 339.60,270.60 339.60,270.60 "
             + "339.60,270.60 339.40,275.40 339.40,275.40 "
             + "339.40,275.40 338.60,281.40 338.60,281.40 "
             + "338.60,281.40 338.20,286.20 338.20,286.20 "
             + "338.20,286.20 336.80,290.40 336.80,290.40 "
             + "336.80,290.40 335.80,293.60 335.80,293.60 "
             + "335.80,293.60 334.40,300.60 334.40,300.60 "
             + "334.40,300.60 333.80,306.80 333.80,306.80 "
             + "333.80,306.80 332.60,302.60 332.60,302.60 "
             + "332.60,302.60 333.40,296.80 333.40,296.80 "
             + "333.40,296.80 334.00,291.00 334.00,291.00 "
             + "334.00,291.00 335.60,286.60 335.60,286.60 "
             + "335.60,286.60 336.20,280.40 336.20,280.40 "
             + "336.20,280.40 336.60,276.40 336.60,276.40 "
             + "336.60,276.40 336.20,272.00 336.20,272.00 "
             + "336.20,272.00 335.20,268.20 335.20,268.20 "
             + "335.20,268.20 333.00,261.00 333.00,261.00M 367.00,253.40 "
           + "C 367.00,253.40 371.40,252.00 371.40,252.00 "
             + "371.40,252.00 373.60,256.60 373.60,256.60 "
             + "373.60,256.60 374.40,262.40 374.40,262.40 "
             + "374.40,262.40 373.80,266.00 373.80,266.00 "
             + "373.80,266.00 373.20,269.60 373.20,269.60 "
             + "373.20,269.60 372.40,272.40 372.40,272.40 "
             + "372.40,272.40 371.40,276.20 371.40,276.20 "
             + "371.40,276.20 370.60,273.20 370.60,273.20 "
             + "370.60,273.20 370.60,271.00 370.60,271.00 "
             + "370.60,271.00 371.80,265.40 371.80,265.40 "
             + "371.80,265.40 371.20,259.80 371.20,259.80 "
             + "371.20,259.80 367.20,253.80 367.20,253.80M 393.20,243.00 "
           + "C 393.20,243.00 398.00,240.80 398.00,240.80 "
             + "398.00,240.80 398.40,245.20 398.40,245.20 "
             + "398.40,245.20 399.20,250.00 399.20,250.00 "
             + "399.20,250.00 399.00,254.20 399.00,254.20 "
             + "399.00,254.20 399.60,257.80 399.60,257.80 "
             + "399.60,257.80 401.80,261.80 401.80,261.80 "
             + "401.80,261.80 402.40,263.00 402.40,263.00 "
             + "402.40,263.00 400.00,262.60 400.00,262.60 "
             + "400.00,262.60 398.20,259.20 398.20,259.20 "
             + "398.20,259.20 396.80,253.00 396.80,253.00 "
             + "396.80,253.00 395.80,247.40 395.80,247.40 "
             + "395.80,247.40 393.40,242.80 393.40,242.80M 415.40,226.80 "
           + "C 415.40,226.80 417.60,223.20 417.60,223.20 "
             + "417.60,223.20 424.80,223.60 424.80,223.60 "
             + "424.80,223.60 430.80,226.20 430.80,226.20 "
             + "430.80,226.20 434.80,229.40 434.80,229.40 "
             + "434.80,229.40 439.00,233.80 439.00,233.80 "
             + "439.00,233.80 441.80,239.00 441.80,239.00 "
             + "441.80,239.00 445.00,241.60 445.00,241.60 "
             + "445.00,241.60 446.20,244.00 446.20,244.00 "
             + "446.20,244.00 442.40,241.60 442.40,241.60 "
             + "442.40,241.60 435.60,233.20 435.60,233.20 "
             + "435.60,233.20 431.00,229.40 431.00,229.40 "
             + "431.00,229.40 424.60,227.60 424.60,227.60 "
             + "424.60,227.60 415.20,227.00 415.20,227.00M 423.60,200.40 "
           + "C 423.60,200.40 423.80,206.00 423.80,206.00 "
             + "423.80,206.00 428.40,206.40 428.40,206.40 "
             + "428.40,206.40 433.20,207.40 433.20,207.40 "
             + "433.20,207.40 438.80,208.60 438.80,208.60 "
             + "438.80,208.60 443.40,207.80 443.40,207.80 "
             + "443.40,207.80 439.00,206.20 439.00,206.20 "
             + "439.00,206.20 434.20,205.60 434.20,205.60 "
             + "434.20,205.60 423.60,201.00 423.60,201.00M 409.20,163.80 "
           + "C 409.20,163.80 413.20,168.00 413.20,168.00 "
             + "413.20,168.00 422.20,167.00 422.20,167.00 "
             + "422.20,167.00 427.20,165.20 427.20,165.20 "
             + "427.20,165.20 431.40,162.00 431.40,162.00 "
             + "431.40,162.00 434.60,158.60 434.60,158.60 "
             + "434.60,158.60 436.00,155.20 436.00,155.20 "
             + "436.00,155.20 436.80,152.80 436.80,152.80 "
             + "436.80,152.80 434.60,154.60 434.60,154.60 "
             + "434.60,154.60 431.20,159.00 431.20,159.00 "
             + "431.20,159.00 426.20,161.80 426.20,161.80 "
             + "426.20,161.80 419.20,163.40 419.20,163.40 "
             + "419.20,163.40 409.20,164.20 409.20,164.20M 387.20,146.80 "
           + "C 387.20,146.80 391.80,149.20 391.80,149.20 "
             + "391.80,149.20 402.40,141.40 402.40,141.40 "
             + "402.40,141.40 413.40,137.40 413.40,137.40 "
             + "413.40,137.40 416.60,136.20 416.60,136.20 "
             + "416.60,136.20 420.40,134.60 420.40,134.60 "
             + "420.40,134.60 413.40,135.20 413.40,135.20 "
             + "413.40,135.20 407.40,137.40 407.40,137.40 "
             + "407.40,137.40 401.60,139.60 401.60,139.60 "
             + "401.60,139.60 394.00,142.00 394.00,142.00 "
             + "394.00,142.00 387.20,147.00 387.20,147.00M 364.80,139.80 "
           + "C 364.80,139.80 368.60,141.40 368.60,141.40 "
             + "368.60,141.40 370.20,137.20 370.20,137.20 "
             + "370.20,137.20 370.80,131.40 370.80,131.40 "
             + "370.80,131.40 370.40,126.80 370.40,126.80 "
             + "370.40,126.80 370.40,122.60 370.40,122.60 "
             + "370.40,122.60 368.60,120.00 368.60,120.00 "
             + "368.60,120.00 368.60,122.60 368.60,122.60 "
             + "368.60,122.60 368.40,124.20 368.40,124.20 "
             + "368.40,124.20 368.00,127.20 368.00,127.20 "
             + "368.00,127.20 367.20,132.20 367.20,132.20 "
             + "367.20,132.20 365.00,140.00 365.00,140.00M 319.20,135.00 "
           + "C 319.20,135.00 323.20,135.20 323.20,135.20 "
             + "323.20,135.20 324.20,130.40 324.20,130.40 "
             + "324.20,130.40 325.80,127.00 325.80,127.00 "
             + "325.80,127.00 328.20,123.20 328.20,123.20 "
             + "328.20,123.20 330.80,120.00 330.80,120.00 "
             + "330.80,120.00 335.00,117.00 335.00,117.00 "
             + "335.00,117.00 339.20,114.60 339.20,114.60 "
             + "339.20,114.60 342.80,112.60 342.80,112.60 "
             + "342.80,112.60 345.60,112.00 345.60,112.00 "
             + "345.60,112.00 349.20,110.40 349.20,110.40 "
             + "349.20,110.40 351.20,109.40 351.20,109.40 "
             + "351.20,109.40 345.60,110.40 345.60,110.40 "
             + "345.60,110.40 342.00,111.20 342.00,111.20 "
             + "342.00,111.20 335.40,113.40 335.40,113.40 "
             + "335.40,113.40 330.60,116.40 330.60,116.40 "
             + "330.60,116.40 325.60,120.40 325.60,120.40 "
             + "325.60,120.40 322.40,124.40 322.40,124.40 "
             + "322.40,124.40 320.40,129.20 320.40,129.20 "
             + "320.40,129.20 319.60,135.00 319.60,135.00M 294.00,134.80 "
           + "C 294.00,134.80 295.20,129.80 295.20,129.80 "
             + "295.20,129.80 297.40,124.40 297.40,124.40 "
             + "297.40,124.40 299.80,120.80 299.80,120.80 "
             + "299.80,120.80 299.60,116.80 299.60,116.80 "
             + "299.60,116.80 298.00,113.40 298.00,113.40 "
             + "298.03,113.26 296.34,110.05 296.20,110.80 "
             + "296.20,110.80 294.40,108.60 294.40,108.60 "
             + "294.40,108.60 292.20,106.00 292.20,106.00 "
             + "292.20,106.00 296.00,106.80 296.00,106.80 "
             + "296.00,106.80 299.80,111.40 299.80,111.40 "
             + "299.80,111.40 301.60,114.40 301.60,114.40 "
             + "301.60,114.40 302.20,119.00 302.20,119.00 "
             + "302.20,119.00 302.20,122.60 302.20,122.60 "
             + "302.20,122.60 301.00,125.60 301.00,125.60 "
             + "301.00,125.60 300.20,128.40 300.20,128.40 "
             + "300.20,128.40 299.20,131.60 299.20,131.60 "
             + "299.20,131.60 298.60,134.60 298.60,134.60 "
             + "298.60,134.60 294.00,135.20 294.00,135.20")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }
	        if (proteinLocalization == bacteriaArray[bactPos + 3]) {

	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "outerMem_bact")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 90.20,197.40 "
           + "C 90.20,197.40 94.60,206.80 94.60,206.80 "
             + "94.60,206.80 100.20,214.00 100.20,214.00 "
             + "100.20,214.00 107.60,221.40 107.60,221.40 "
             + "107.60,221.40 119.20,229.60 119.20,229.60 "
             + "119.20,229.60 130.60,236.00 130.60,236.00 "
             + "130.60,236.00 144.60,242.00 144.60,242.00 "
             + "144.60,242.00 158.60,246.20 158.60,246.20 "
             + "158.60,246.20 177.00,250.80 177.00,250.80 "
             + "177.00,250.80 199.20,254.40 199.20,254.40 "
             + "199.20,254.40 218.40,257.20 218.40,257.20 "
             + "218.40,257.20 239.60,259.00 239.60,259.00 "
             + "239.60,259.00 264.20,259.80 264.20,259.80 "
             + "264.20,259.80 290.40,259.20 290.40,259.20 "
             + "290.40,259.20 314.80,257.00 314.80,257.00 "
             + "314.80,257.00 338.80,253.00 338.80,253.00 "
             + "338.80,253.00 352.80,250.60 352.80,250.60 "
             + "352.80,250.60 371.80,245.40 371.80,245.40 "
             + "371.80,245.40 385.80,239.80 385.80,239.80 "
             + "385.80,239.80 398.00,233.20 398.00,233.20 "
             + "398.00,233.20 408.20,224.20 408.20,224.20 "
             + "408.20,224.20 415.60,211.60 415.60,211.60 "
             + "415.60,211.60 416.60,201.40 416.60,201.40 "
             + "416.60,201.40 415.40,194.40 415.40,194.40 "
             + "415.40,194.40 413.60,189.00 413.60,189.00 "
             + "413.60,189.00 411.20,182.20 411.20,182.20 "
             + "411.20,182.20 407.60,175.60 407.60,175.60 "
             + "407.60,175.60 402.60,168.40 402.60,168.40 "
             + "402.60,168.40 399.20,164.00 399.20,164.00 "
             + "399.20,164.00 393.40,158.60 393.40,158.60 "
             + "393.40,158.60 386.60,154.60 386.60,154.60 "
             + "386.60,154.60 378.00,150.20 378.00,150.20 "
             + "378.00,150.20 368.20,148.00 368.20,148.00 "
             + "368.20,148.00 359.80,145.20 359.80,145.20 "
             + "359.80,145.20 349.80,143.60 349.80,143.60 "
             + "349.80,143.60 340.60,142.20 340.60,142.20 "
             + "340.60,142.20 323.60,141.80 323.60,141.80 "
             + "323.60,141.80 293.80,141.20 293.80,141.20 "
             + "293.80,141.20 240.80,140.80 240.80,140.80 "
             + "240.80,140.80 202.00,138.80 202.00,138.80 "
             + "202.00,138.80 178.40,139.80 178.40,139.80 "
             + "178.40,139.80 161.00,140.40 161.00,140.40 "
             + "161.00,140.40 142.00,142.40 142.00,142.40 "
             + "142.00,142.40 127.80,145.00 127.80,145.00 "
             + "127.80,145.00 115.80,148.00 115.80,148.00 "
             + "115.80,148.00 106.80,151.40 106.80,151.40 "
             + "106.80,151.40 98.20,157.80 98.20,157.80 "
             + "98.20,157.80 92.40,164.40 92.40,164.40 "
             + "92.40,164.40 89.80,173.40 89.80,173.40 "
             + "89.80,173.40 88.80,182.20 88.80,182.20 "
             + "88.80,182.20 90.40,198.20 90.40,198.20M 104.40,228.60 "
           + "C 104.40,228.60 88.20,211.80 88.20,211.80 "
             + "88.20,211.80 84.60,205.80 84.60,205.80 "
             + "84.60,205.80 82.00,196.40 82.00,196.40 "
             + "82.00,196.40 81.80,174.40 81.80,174.40 "
             + "81.80,174.40 82.40,170.60 82.40,170.60 "
             + "82.40,170.60 84.00,165.20 84.00,165.20 "
             + "84.00,165.20 87.60,159.00 87.60,159.00 "
             + "87.60,159.00 92.80,152.60 92.80,152.60 "
             + "92.80,152.60 100.00,148.00 100.00,148.00 "
             + "100.00,148.00 105.80,144.80 105.80,144.80 "
             + "105.80,144.80 111.80,142.60 111.80,142.60 "
             + "111.80,142.60 117.80,140.60 117.80,140.60 "
             + "117.80,140.60 123.60,138.40 123.60,138.40 "
             + "123.60,138.40 132.60,136.80 132.60,136.80 "
             + "132.60,136.80 143.40,135.00 143.40,135.00 "
             + "143.40,135.00 151.20,133.60 151.20,133.60 "
             + "151.20,133.60 158.80,133.80 158.80,133.80 "
             + "158.80,133.80 165.60,132.80 165.60,132.80 "
             + "165.60,132.80 177.00,132.20 177.00,132.20 "
             + "177.00,132.20 186.20,132.00 186.20,132.00 "
             + "186.20,132.00 194.20,131.40 194.20,131.40 "
             + "194.20,131.40 201.40,131.80 201.40,131.80 "
             + "201.40,131.80 209.80,131.40 209.80,131.40 "
             + "209.80,131.40 217.60,131.20 217.60,131.20 "
             + "217.60,131.20 225.20,132.00 225.20,132.00 "
             + "225.20,132.00 234.40,132.40 234.40,132.40 "
             + "234.40,132.40 240.40,132.80 240.40,132.80 "
             + "240.40,132.80 247.80,133.40 247.80,133.40 "
             + "247.80,133.40 256.20,133.80 256.20,133.80 "
             + "256.20,133.80 264.00,134.00 264.00,134.00 "
             + "264.00,134.00 273.80,134.40 273.80,134.40 "
             + "273.80,134.40 285.20,134.40 285.20,134.40 "
             + "285.20,134.40 294.20,134.40 294.20,134.40 "
             + "294.20,134.40 304.20,134.40 304.20,134.40 "
             + "304.20,134.40 318.20,134.20 318.20,134.20 "
             + "318.20,134.20 324.20,134.40 324.20,134.40 "
             + "324.20,134.40 332.00,134.40 332.00,134.40 "
             + "332.00,134.40 339.00,135.00 339.00,135.00 "
             + "339.00,135.00 349.20,135.80 349.20,135.80 "
             + "349.20,135.80 357.60,137.40 357.60,137.40 "
             + "357.60,137.40 365.00,138.60 365.00,138.60 "
             + "365.00,138.60 372.80,141.00 372.80,141.00 "
             + "372.80,141.00 385.20,144.60 385.20,144.60 "
             + "385.20,144.60 389.80,147.40 389.80,147.40 "
             + "389.80,147.40 398.00,151.80 398.00,151.80 "
             + "398.00,151.80 404.20,156.80 404.20,156.80 "
             + "404.20,156.80 408.60,162.00 408.60,162.00 "
             + "408.60,162.00 413.00,167.00 413.00,167.00 "
             + "413.00,167.00 418.60,177.60 418.60,177.60 "
             + "418.60,177.60 421.60,186.00 421.60,186.00 "
             + "421.60,186.00 424.00,195.00 424.00,195.00 "
             + "424.00,195.00 424.40,200.60 424.40,200.60 "
             + "424.40,200.60 424.60,206.00 424.60,206.00 "
             + "424.60,206.00 424.60,212.60 424.60,212.60 "
             + "424.60,212.60 422.80,216.80 422.80,216.80 "
             + "422.80,216.80 420.20,221.00 420.20,221.00 "
             + "420.20,221.00 418.60,224.20 418.60,224.20 "
             + "418.60,224.20 415.40,228.40 415.40,228.40 "
             + "415.40,228.40 411.40,232.20 411.40,232.20 "
             + "411.40,232.20 405.80,237.80 405.80,237.80 "
             + "405.80,237.80 399.40,241.80 399.40,241.80 "
             + "399.40,241.80 396.00,243.60 396.00,243.60 "
             + "396.00,243.60 387.80,247.40 387.80,247.40 "
             + "387.80,247.40 374.40,252.00 374.40,252.00 "
             + "374.40,252.00 366.00,254.80 366.00,254.80 "
             + "366.00,254.80 357.00,257.60 357.00,257.60 "
             + "357.00,257.60 344.40,260.00 344.40,260.00 "
             + "344.40,260.00 332.00,262.40 332.00,262.40 "
             + "332.00,262.40 320.80,263.60 320.80,263.60 "
             + "320.80,263.60 306.80,265.20 306.80,265.20 "
             + "306.80,265.20 298.60,265.80 298.60,265.80 "
             + "298.60,265.80 285.80,267.00 285.80,267.00 "
             + "285.80,267.00 275.00,266.60 275.00,266.60 "
             + "275.00,266.60 264.00,267.60 264.00,267.60 "
             + "264.00,267.60 249.40,267.20 249.40,267.20 "
             + "249.40,267.20 232.40,265.60 232.40,265.60 "
             + "232.40,265.60 220.20,265.00 220.20,265.00 "
             + "220.20,265.00 206.60,262.80 206.60,262.80 "
             + "206.60,262.80 194.20,261.00 194.20,261.00 "
             + "194.20,261.00 172.40,256.80 172.40,256.80 "
             + "172.40,256.80 154.40,252.00 154.40,252.00 "
             + "154.40,252.00 141.40,248.00 141.40,248.00 "
             + "141.40,248.00 135.60,245.80 135.60,245.80 "
             + "135.60,245.80 128.20,242.40 128.20,242.40 "
             + "128.20,242.40 118.20,237.60 118.20,237.60 "
             + "118.20,237.60 104.40,228.60 104.40,228.60")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }
	        else if (proteinLocalization == bacteriaArray[bactPos + 4]) {

	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "periplasmic_bact")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 97.80,180.20 "
           + "C 97.80,180.20 99.00,173.20 99.00,173.20 "
             + "99.00,173.20 101.60,166.60 101.60,166.60 "
             + "101.60,166.60 107.80,161.40 107.80,161.40 "
             + "107.80,161.40 117.40,155.60 117.40,155.60 "
             + "117.40,155.60 129.80,151.60 129.80,151.60 "
             + "129.80,151.60 145.60,149.40 145.60,149.40 "
             + "145.60,149.40 163.60,147.40 163.60,147.40 "
             + "163.60,147.40 179.60,147.40 179.60,147.40 "
             + "179.60,147.40 198.40,147.20 198.40,147.20 "
             + "198.40,147.20 221.00,147.80 221.00,147.80 "
             + "221.00,147.80 237.60,147.80 237.60,147.80 "
             + "237.60,147.80 266.60,148.60 266.60,148.60 "
             + "266.60,148.60 293.60,148.80 293.60,148.80 "
             + "293.60,148.80 321.40,148.40 321.40,148.40 "
             + "321.40,148.40 335.40,148.80 335.40,148.80 "
             + "335.40,148.80 349.00,149.80 349.00,149.80 "
             + "349.00,149.80 361.20,152.20 361.20,152.20 "
             + "361.20,152.20 373.40,156.00 373.40,156.00 "
             + "373.40,156.00 385.20,160.80 385.20,160.80 "
             + "385.20,160.80 393.00,167.00 393.00,167.00 "
             + "393.00,167.00 399.00,174.20 399.00,174.20 "
             + "399.00,174.20 404.60,183.40 404.60,183.40 "
             + "404.60,183.40 407.60,192.80 407.60,192.80 "
             + "407.60,192.80 408.80,201.00 408.80,201.00 "
             + "408.80,201.00 407.80,209.40 407.80,209.40 "
             + "407.80,209.40 404.20,217.40 404.20,217.40 "
             + "404.20,217.40 397.80,224.40 397.80,224.40 "
             + "397.80,224.40 388.80,230.40 388.80,230.40 "
             + "388.80,230.40 376.00,236.00 376.00,236.00 "
             + "376.00,236.00 363.80,240.00 363.80,240.00 "
             + "363.80,240.00 347.40,243.80 347.40,243.80 "
             + "347.40,243.80 331.80,245.80 331.80,245.80 "
             + "331.80,245.80 313.40,248.20 313.40,248.20 "
             + "313.40,248.20 295.00,248.80 295.00,248.80 "
             + "295.00,248.80 268.40,249.80 268.40,249.80 "
             + "268.40,249.80 238.20,249.00 238.20,249.00 "
             + "238.20,249.00 215.20,247.40 215.20,247.40 "
             + "215.20,247.40 199.60,245.40 199.60,245.40 "
             + "199.60,245.40 184.60,243.00 184.60,243.00 "
             + "184.60,243.00 169.40,239.40 169.40,239.40 "
             + "169.40,239.40 153.80,235.60 153.80,235.60 "
             + "153.80,235.60 139.40,230.60 139.40,230.60 "
             + "139.40,230.60 127.00,225.20 127.00,225.20 "
             + "127.00,225.20 116.60,218.40 116.60,218.40 "
             + "116.60,218.40 107.60,210.00 107.60,210.00 "
             + "107.60,210.00 101.40,201.00 101.40,201.00 "
             + "101.40,201.00 98.60,193.80 98.60,193.80 "
             + "98.60,193.80 97.60,180.20 97.60,180.20M 90.20,197.40 "
           + "C 90.20,197.40 94.60,206.80 94.60,206.80 "
             + "94.60,206.80 100.20,214.00 100.20,214.00 "
             + "100.20,214.00 107.60,221.40 107.60,221.40 "
             + "107.60,221.40 119.20,229.60 119.20,229.60 "
             + "119.20,229.60 130.60,236.00 130.60,236.00 "
             + "130.60,236.00 144.60,242.00 144.60,242.00 "
             + "144.60,242.00 158.60,246.20 158.60,246.20 "
             + "158.60,246.20 177.00,250.80 177.00,250.80 "
             + "177.00,250.80 199.20,254.40 199.20,254.40 "
             + "199.20,254.40 218.40,257.20 218.40,257.20 "
             + "218.40,257.20 239.60,259.00 239.60,259.00 "
             + "239.60,259.00 264.20,259.80 264.20,259.80 "
             + "264.20,259.80 290.40,259.20 290.40,259.20 "
             + "290.40,259.20 314.80,257.00 314.80,257.00 "
             + "314.80,257.00 338.80,253.00 338.80,253.00 "
             + "338.80,253.00 352.80,250.60 352.80,250.60 "
             + "352.80,250.60 371.80,245.40 371.80,245.40 "
             + "371.80,245.40 385.80,239.80 385.80,239.80 "
             + "385.80,239.80 398.00,233.20 398.00,233.20 "
             + "398.00,233.20 408.20,224.20 408.20,224.20 "
             + "408.20,224.20 415.60,211.60 415.60,211.60 "
             + "415.60,211.60 416.60,201.40 416.60,201.40 "
             + "416.60,201.40 415.40,194.40 415.40,194.40 "
             + "415.40,194.40 413.60,189.00 413.60,189.00 "
             + "413.60,189.00 411.20,182.20 411.20,182.20 "
             + "411.20,182.20 407.60,175.60 407.60,175.60 "
             + "407.60,175.60 402.60,168.40 402.60,168.40 "
             + "402.60,168.40 399.20,164.00 399.20,164.00 "
             + "399.20,164.00 393.40,158.60 393.40,158.60 "
             + "393.40,158.60 386.60,154.60 386.60,154.60 "
             + "386.60,154.60 378.00,150.20 378.00,150.20 "
             + "378.00,150.20 368.20,148.00 368.20,148.00 "
             + "368.20,148.00 359.80,145.20 359.80,145.20 "
             + "359.80,145.20 349.80,143.60 349.80,143.60 "
             + "349.80,143.60 340.60,142.20 340.60,142.20 "
             + "340.60,142.20 323.60,141.80 323.60,141.80 "
             + "323.60,141.80 293.80,141.20 293.80,141.20 "
             + "293.80,141.20 240.80,140.80 240.80,140.80 "
             + "240.80,140.80 202.00,138.80 202.00,138.80 "
             + "202.00,138.80 178.40,139.80 178.40,139.80 "
             + "178.40,139.80 161.00,140.40 161.00,140.40 "
             + "161.00,140.40 142.00,142.40 142.00,142.40 "
             + "142.00,142.40 127.80,145.00 127.80,145.00 "
             + "127.80,145.00 115.80,148.00 115.80,148.00 "
             + "115.80,148.00 106.80,151.40 106.80,151.40 "
             + "106.80,151.40 98.20,157.80 98.20,157.80 "
             + "98.20,157.80 92.40,164.40 92.40,164.40 "
             + "92.40,164.40 89.80,173.40 89.80,173.40 "
             + "89.80,173.40 88.80,182.20 88.80,182.20 "
             + "88.80,182.20 90.40,198.20 90.40,198.20")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");

	        }
	        else if (proteinLocalization == bacteriaArray[bactPos + 5]) {
	            var svgPath = d3.select("svg")
		   	   	  .append("path")
				  .attr("id", "plasmaMem_bact")
				  .attr("fill", colorCellCompartment)
				  .attr("d", "M 202.00,147.21 "
           + "C 202.00,147.21 219.00,148.00 219.00,148.00 "
             + "219.00,148.00 254.00,148.00 254.00,148.00 "
             + "254.00,148.00 271.00,149.00 271.00,149.00 "
             + "271.00,149.00 306.00,149.00 306.00,149.00 "
             + "306.00,149.00 318.00,148.02 318.00,148.02 "
             + "318.00,148.02 334.00,149.00 334.00,149.00 "
             + "350.25,149.03 369.58,152.56 384.00,160.32 "
             + "406.56,172.46 421.09,210.25 393.00,227.94 "
             + "364.57,245.83 317.01,248.62 284.00,249.00 "
             + "284.00,249.00 274.00,249.95 274.00,249.95 "
             + "274.00,249.95 262.00,249.95 262.00,249.95 "
             + "262.00,249.95 247.00,249.00 247.00,249.00 "
             + "220.06,248.96 193.15,245.40 167.00,238.87 "
             + "153.95,235.62 141.12,232.26 129.00,226.19 "
             + "116.01,219.69 101.69,207.86 98.52,193.00 "
             + "97.85,189.86 97.97,185.29 98.00,182.00 "
             + "98.10,174.08 99.61,167.72 106.02,162.52 "
             + "121.82,149.70 142.92,150.15 162.00,147.21 "
             + "162.00,147.21 202.00,147.21 202.00,147.21 Z "
           + "M 161.00,156.00 "
           + "C 148.39,156.02 124.33,158.86 114.04,166.10 "
             + "107.53,170.69 106.85,177.63 107.01,185.00 "
             + "107.49,205.75 126.93,215.97 144.00,222.99 "
             + "172.82,234.84 204.26,237.99 235.00,240.09 "
             + "235.00,240.09 247.00,241.00 247.00,241.00 "
             + "247.00,241.00 281.00,241.00 281.00,241.00 "
             + "281.00,241.00 299.00,240.00 299.00,240.00 "
             + "299.00,240.00 310.00,239.09 310.00,239.09 "
             + "328.23,237.84 329.12,237.66 347.00,234.42 "
             + "356.33,232.74 374.95,228.16 383.00,223.82 "
             + "388.04,221.11 394.12,216.90 397.16,212.00 "
             + "403.81,201.29 398.22,185.88 390.47,177.30 "
             + "388.27,174.86 381.89,170.04 379.00,168.35 "
             + "363.76,159.42 344.36,157.03 327.00,157.00 "
             + "327.00,157.00 312.00,156.00 312.00,156.00 "
             + "312.00,156.00 295.00,157.00 295.00,157.00 "
             + "295.00,157.00 276.00,157.00 276.00,157.00 "
             + "276.00,157.00 261.00,156.00 261.00,156.00 "
             + "261.00,156.00 217.00,156.00 217.00,156.00 "
             + "217.00,156.00 202.00,155.14 202.00,155.14 "
             + "202.00,155.14 174.00,155.14 174.00,155.14 "
             + "168.18,156.12 166.73,155.99 161.00,156.00 Z")
				  .attr("onmouseover", "javaScript:mouseEventHandler(event,'" + proteinLocalization + "','" + proteinID + "');");
	        }

	    }
	    else if (cellType == cellTypeArray[cellPos + 2]) {
            
            if (proteinLocalization == archeaArray[archPos]) {

	        	drawProtein(proteinID, proteinLocalization, colorCellCompartment, "cytoplasm_arch", arch_svg[2]); 

	        }
	        else if (proteinLocalization == archeaArray[archPos+1]) {

	        	drawProtein(proteinID, proteinLocalization, colorCellCompartment, "extraCellular_arch", arch_svg[1]);

	        }
	        else if (proteinLocalization == archeaArray[archPos+2]) {

	        	drawProtein(proteinID, proteinLocalization, colorCellCompartment, "plasmaMem_arch", arch_svg[0]);

	        }

	    }


    }

    function selectCellPicture() {
	        
        //Clear old image for next uploading
        var divImg = getPopupObject('myCanvas');
        while (divImg.hasChildNodes()) {
			  divImg.removeChild(divImg.firstChild);
        }
        //Select eukaryota
	if (cellType == cellTypeArray[cellPos]) {
		//SVG		   
		   var divSVG = d3.select("#myCanvas") 
		  	        .append("svg")
			        .attr("width",500)
        	        .attr("height",400);
					
		   var svg = d3.select("svg")
		   	   	    .append("image")
					.attr("xlink:href", view.path + "eukaryota-2D.jpg")
        	        .attr("x",0)
					.attr("y",0)
					.attr("width",500)
        	        .attr("height",400)
					.attr("onmousemove", "javaScript:ClearPopup();");	   				
            
        }
        //Select bacteria
	else if (cellType == cellTypeArray[cellPos + 1]) {
					
			//SVG		   
		   var divSVG = d3.select("#myCanvas") 
		  	        .append("svg")
			        .attr("width",500)
        	        .attr("height",400);
		   var svg = d3.select("svg")
		   	   	    .append("image")
					.attr("xlink:href", view.path + "bacteria-2D.jpg")
        	        .attr("x",0)
					.attr("y",0)
					.attr("width",500)
        	        .attr("height",400)
					.attr("onmousemove", "javaScript:ClearPopup();");
        }
        //Select archaea
	else if (cellType == cellTypeArray[cellPos + 2]) {
			
			
		   //SVG		   
		   var divSVG = d3.select("#myCanvas") 
		  	        .append("svg")
			        .attr("width",500)
        	        .attr("height",400);
		   var svg = d3.select("svg")
		   	   	    .append("image")
					.attr("xlink:href", view.path + "archaea-2D.jpg")
        	        .attr("x",0)
					.attr("y",0)
					.attr("width",500)
        	        .attr("height",400)
					.attr("onmousemove", "javaScript:ClearPopup();");	
		}


    }	
	
	function isOneProteinInFile()
	{
	 		 // Declaring variables for checking isOneProtein
						 var checkOneProtein = "";
        				 var compareProtein = "";        				 
        				 var oneProtein = scoreProtein[0];
                    	 checkOneProtein = oneProtein.proteinID;
				//Checking only one protein in file				
				for (var i = 0; i < scoreProtein.length; i++) {
						   	 	var localization = scoreProtein[i]
              					compareProtein = localization.proteinID;
          										 
          						if(compareProtein != checkOneProtein)
          						{
          							isNotOneProtein = true;
									break;
          						}
								
				}
				
				if(isNotOneProtein == false)
				{
				 	writeHeader('headerPP',oneProtein.proteinID);
				}				 
						 
	}
	function definedColorLocalization() {
  
        var colorLocalizationArray =[];
	    
		//Blue - 0
	    var blue_colorLocalizationArray=["#EBEBE0","#D6E0EB","#C2D1E0","#ADC2D6","#99B2CC","#85A3C2","#5C85AD","#336699","#29527A","#1F3D5C"];

		//Green - 1
		 var green_colorLocalizationArray=["#E8F4E9","#D7FCDC","#B9FAC3","#96F6A5","#76E687","#4DCB60","#379745","#167023","#045310","#003F0A"];
	
	    //Lila - 2
		var lila_colorLocalizationArray=["#FAE6FA","#F5CCF5","#F0B2F0","#EB99EB","#E680E6","#E066E0","#D633D6","#B800B8","#8F008F","#660066"];
			
		//Red - 3
		var red_colorLocalizationArray=["#FAE6E6","#F5CCCC","#F0B2B2","#EB9999","#E68080","#E06666","#D63333","#CC0000","#A30000","#7A0000"];
		
		
	     if(selectedcolorLoc == "blue"){
			colorLocalizationArray = blue_colorLocalizationArray.slice(0);
		 }
		 else if (selectedcolorLoc == "green"){
			  colorLocalizationArray = green_colorLocalizationArray.slice(0); 
		 }
		 else if (selectedcolorLoc == "lila"){
			  colorLocalizationArray = lila_colorLocalizationArray.slice(0); 
		 }
		 else if (selectedcolorLoc == "red"){
			  colorLocalizationArray = red_colorLocalizationArray.slice(0); 
		 }
		 else{
			//Green 
			  colorLocalizationArray=["#E8F4E9","#D7FCDC","#B9FAC3","#96F6A5","#76E687","#4DCB60","#379745","#167023","#045310","#003F0A"];
		 }
		 
		
	    //Array containing protein compartment, number of proteins per compartment and color
	    var proteinLocalizationColorArray = [];
	    var colorCellCompartment;

	    var e_chl = 0;
	    var e_chl_mem = 0;
	    var e_cyt = 0;
	    var e_end_ret = 0;
	    var e_end_ret_mem = 0;
	    var e_ext_cell = 0;
	    var e_gol_app = 0;
	    var e_gol_app_mem = 0;
	    var e_mit = 0;
	    var e_mit_mem = 0;
	    var e_nuc = 0;
	    var e_nuc_mem = 0;
	    var e_per = 0;
	    var e_per_mem = 0;
	    var e_pla = 0;
	    var e_pla_mem = 0;
	    var e_vac = 0;
	    var e_vac_mem = 0;
	    var e_cellcompartment = 0;

	    var a_cyt = 0;
	    var a_ext_cell = 0;
	    var a_pla_mem = 0;
	    var a_cellcompartment = 0;

	    var b_cyt = 0;
	    var b_ext_cell = 0;
	    var b_fim = 0;
	    var b_out_mem = 0;
	    var b_per_spa = 0;
	    var b_pla_mem = 0;
	    var b_cellcompartment = 0;


	    var cellcompartmentArray = [];

	    //Arrays with not identified cell compartments

	    var e_ni_cellcompatmentArray = [];
	    var a_ni_cellcompatmentArray = [];
	    var b_ni_cellcompatmentArray = [];

	    var ni_cellcompatmentArray = [];

	    var ni_numcellcompatmentArray = [];


	    //Read localization

	    for (var i = 0; i < scoreProtein.length; i++) {
	        var localization = scoreProtein[i];

	        if (cellType == cellTypeArray[cellPos]) {

	            if (localization.proteinLocalization == eukaryotaArray[eukaPos]) {
	                e_chl = e_chl + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 1]) {
	                e_chl_mem = e_chl_mem + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 2]) {
	                e_cyt = e_cyt + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 3]) {
	                e_end_ret = e_end_ret + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 4]) {
	                e_end_ret_mem = e_end_ret_mem + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 5]) {
	                e_ext_cell = e_ext_cell + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 6]) {
	                e_gol_app = e_gol_app + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 7]) {
	                e_gol_app_mem = e_gol_app_mem + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 8]) {
	                e_mit = e_mit + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 9]) {
	                e_mit_mem = e_mit_mem + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 10]) {
	                e_nuc = e_nuc + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 11]) {
	                e_nuc_mem = e_nuc_mem + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 12]) {
	                e_per = e_per + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 13]) {
	                e_per_mem = e_per_mem + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 14]) {
	                e_pla = e_pla + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 15]) {
	                e_pla_mem = e_pla_mem + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 16]) {
	                e_vac = e_vac + 1;
	            }
	            else if (localization.proteinLocalization == eukaryotaArray[eukaPos + 17]) {
	                e_vac_mem = e_vac_mem + 1;
	            }

	            else {
	                e_cellcompartment = e_cellcompartment + 1;
	                e_ni_cellcompatmentArray.push(localization.proteinLocalization);
	            }

	        }
	        else if (cellType == cellTypeArray[cellPos + 2]) {

	            if (localization.proteinLocalization == archeaArray[archPos]) {
	                a_cyt = a_cyt + 1;
	            }
	            else if (localization.proteinLocalization == archeaArray[archPos + 1]) {
	                a_ext_cell = a_ext_cell + 1;
	            }
	            else if (localization.proteinLocalization == archeaArray[archPos + 2]) {
	                a_pla_mem = a_pla_mem + 1;
	            }
	            else {
	                a_cellcompartment = a_cellcompartment + 1;
	                a_ni_cellcompatmentArray.push(localization.proteinLocalization);
	            }

	        }
	        else if (cellType == cellTypeArray[cellPos + 1]) {
	            if (localization.proteinLocalization == bacteriaArray[bactPos]) {
	                b_cyt = b_cyt + 1;
	            }
	            else if (localization.proteinLocalization == bacteriaArray[bactPos + 1]) {
	                b_ext_cell = b_ext_cell + 1;
	            }
	            else if (localization.proteinLocalization == bacteriaArray[bactPos + 2]) {
	                b_fim = b_fim + 1;
	            }
	            if (localization.proteinLocalization == bacteriaArray[bactPos + 3]) {
	                b_out_mem = b_out_mem + 1;
	            }
	            else if (localization.proteinLocalization == bacteriaArray[bactPos + 4]) {
	                b_per_spa = b_per_spa + 1;
	            }
	            else if (localization.proteinLocalization == bacteriaArray[bactPos + 5]) {
	                b_pla_mem = b_pla_mem + 1;
	            }
	            else {
	                b_cellcompartment = b_cellcompartment + 1;
	                b_ni_cellcompatmentArray.push(localization.proteinLocalization);
	            }
	        }

	    }

	    //Fill array with counters	
	    var numproteinsArray = [];

	    if (cellType == cellTypeArray[cellPos]) {
	        numproteinsArray.push(e_chl);
	        numproteinsArray.push(e_chl_mem);
	        numproteinsArray.push(e_cyt);
	        numproteinsArray.push(e_end_ret);
	        numproteinsArray.push(e_end_ret_mem);
	        numproteinsArray.push(e_ext_cell);
	        numproteinsArray.push(e_gol_app);
	        numproteinsArray.push(e_gol_app_mem);
	        numproteinsArray.push(e_mit);
	        numproteinsArray.push(e_mit_mem);
	        numproteinsArray.push(e_nuc);
	        numproteinsArray.push(e_nuc_mem);
	        numproteinsArray.push(e_per);
	        numproteinsArray.push(e_per_mem);
	        numproteinsArray.push(e_pla);
	        numproteinsArray.push(e_pla_mem);
	        numproteinsArray.push(e_vac);
	        numproteinsArray.push(e_vac_mem);
	        cellcompartmentArray = eukaryotaArray.slice(0);

	        ni_cellcompatmentArray = e_ni_cellcompatmentArray.slice(0);
	        ni_numcellcompatmentArray.push(e_cellcompartment);

	    }
	    else if (cellType == cellTypeArray[cellPos + 2]) {
	        numproteinsArray.push(a_cyt);
	        numproteinsArray.push(a_ext_cell);
	        numproteinsArray.push(a_pla_mem);
	        cellcompartmentArray = archeaArray.slice(0);

	        ni_cellcompatmentArray = a_ni_cellcompatmentArray.slice(0);
	        ni_numcellcompatmentArray.push(a_cellcompartment);
	    }
	    else if (cellType == cellTypeArray[cellPos + 1]) {
	        numproteinsArray.push(b_cyt);
	        numproteinsArray.push(b_ext_cell);
	        numproteinsArray.push(b_fim);
	        numproteinsArray.push(b_out_mem);
	        numproteinsArray.push(b_per_spa);
	        numproteinsArray.push(b_pla_mem);
	        cellcompartmentArray = bacteriaArray.slice(0);

	        ni_cellcompatmentArray = b_ni_cellcompatmentArray.slice(0);
	        ni_numcellcompatmentArray.push(b_cellcompartment);
	    }
		
		
		//Get total number of proteins		
		var countnumpro=0;
		for (var i = 0; i < numproteinsArray.length; i++) {		
		 countnumpro = countnumpro + numproteinsArray[i]
		}
		
				
		//Get loc percentages
		var localizationpercentageArray = [];		
		for (var i = 0; i < numproteinsArray.length; i++) {
			localizationpercentageArray.push(Math.round((parseInt(numproteinsArray[i])/parseInt(countnumpro))*100));
		}		
		
		
		//Get max and min percentages(localization)
		
		var sortlocalizationpercentageArray = localizationpercentageArray.slice(0);
	    var maxpercentage = sortlocalizationpercentageArray.sort(function (a, b) { return b - a })[0];
	    var minpercentage = sortlocalizationpercentageArray.sort(function (a, b) { return a - b })[0];
				
		
		//Applying formula to assign color for localization

	    //class size localization
	    var maxcolorloc = 10;
	    var csloc = (-1)*((minpercentage - maxpercentage) / maxcolorloc);
		
					
	    //Get max and min number of proteins

	    var sortproteinsArray = numproteinsArray.slice(0);

	    var maxnumpro = sortproteinsArray.sort(function (a, b) { return b - a })[0];
	    var minnumpro = sortproteinsArray.sort(function (a, b) { return a - b })[0];

		// Array of size classes for localization
	    var leftArrayloc = [];
	    var rightArrayloc = [];

	    leftArrayloc.push(minpercentage);
	    rightArrayloc.push(minpercentage + csloc);
		
		
	    for (i = 1; i < maxcolorloc; i++) {

	        leftloc = rightArrayloc[i - 1];
	        leftArrayloc.push(leftloc);

	        rightloc = leftArrayloc[i] + csloc;
	        rightArrayloc.push(rightloc);

	    }

		//Rounding the last element of localization array to an integer
	    if (!(Number.isInteger(rightArrayloc[9]))) {
	        rightArrayloc[9] = Math.round(rightArrayloc[9]);
	    }

			
		//Define size class as caption			
		roundedRightArray = [];
		for (i = 0; i < rightArrayloc.length; i++) {
			roundedRightArray.push(Math.round(rightArrayloc[i]));
		}

		
	    //Fill array with counters and colors
	    var proteinLocColorArray = [];
		
       		
		//Loop for asigning colors
		var colorLocalizationpercentageArray=[];
		for (var i = 0; i < localizationpercentageArray.length; i++) {

	        for (var j = 0; j < leftArrayloc.length; j++) {
	            if (localizationpercentageArray[i] >= leftArrayloc[j] && localizationpercentageArray[i] <= rightArrayloc[j]) {
	                
					colorLocalizationpercentageArray.push(colorLocalizationArray[j]);
	            }
	        }
	    }	
		//end Loop
		
		for (var i = 0; i < localizationpercentageArray.length; i++) {

	                if (localizationpercentageArray[i] == 0) {
	                    proteinLocColorArray.push({
	                        proteinLocalization: cellcompartmentArray[i],
	                        LocalizationColor: "none",                   
							numberProtein: numproteinsArray[i],
							percentProtein:  0
	                    });
	                }
	                else {

	                    proteinLocColorArray.push({
	                        proteinLocalization: cellcompartmentArray[i],
	                        LocalizationColor: colorLocalizationpercentageArray[i],
							numberProtein : numproteinsArray[i],
							percentProtein : localizationpercentageArray[i]
	                    });
	                }        

	    }
		
	    return proteinLocColorArray;

	}
	
	
	function definedColorScore(maxminScore)
	{
			
	 		var colorArray=[];
			//Blue - 0
			var blue_colorScoreArray=["#EBEBE0","#D6E0EB","#C2D1E0","#ADC2D6","#99B2CC","#85A3C2","#5C85AD","#336699","#29527A","#1F3D5C"];

			//Green - 1
			var green_colorScoreArray=["#E8F4E9","#D7FCDC","#B9FAC3","#96F6A5","#76E687","#4DCB60","#379745","#167023","#045310","#003F0A"];
	
			//Lila - 2
			var lila_colorScoreArray=["#FAE6FA","#F5CCF5","#F0B2F0","#EB99EB","#E680E6","#E066E0","#D633D6","#B800B8","#8F008F","#660066"];
			
			//Red - 3
			var red_colorScoreArray=["#FAE6E6","#F5CCCC","#F0B2B2","#EB9999","#E68080","#E06666","#D63333","#CC0000","#A30000","#7A0000"];
		
		
			if(selectedcolorScore == "blue"){
				colorArray = blue_colorScoreArray.slice(0);
			}
			else if (selectedcolorScore == "green"){
				colorArray = green_colorScoreArray.slice(0); 
			}
			else if (selectedcolorScore == "lila"){
				colorArray = lila_colorScoreArray.slice(0); 
			}
			else if (selectedcolorScore == "red"){
				colorArray = red_colorScoreArray.slice(0); 
			}
			else{
				//Red
				colorArray=["#FAE6E6","#F5CCCC","#F0B2B2","#EB9999","#E68080","#E06666","#D63333","#CC0000","#A30000","#7A0000"];
			}
			
			var maxcolor=10;              
              
              //Get the minimum and maximum score by reading the second line of the file
              var score = maxminScore;
             
              var scorescale = score.split("-");
              var min = (scorescale[0]+1)-1;
              var max = scorescale[1];
   
              
              //class size
              var cs=(max-min)/maxcolor;
              
              // Array of size classes
              var leftArray = [];
              var rightArray = [];
              
              leftArray.push(min);
              rightArray.push(min+cs);
              
              for(i=1; i<maxcolor; i++){
              		
              	left=rightArray[i-1];
              	leftArray.push(left);
              	
              	right=leftArray[i]+cs;	
              	rightArray.push(right);
              		
              }
              
              //Array containing protein score and score color
              var proteinScoreColorArray = [];
              //Assign color to proteinscore
              for(var i=0; i<scoreProtein.length; i++){
              	var score = scoreProtein[i];
    										    				
    					if(score.proteinScore == 0)
    					{
    					 		proteinScoreColorArray.push({
    						        proteinID:score.proteinID,
                                    proteinLocalization: score.proteinLocalization,
    								proteinScore: score.proteinScore,
    								scoreColor: colorArray[0],
    								percentScore: 0
    								
                                });	
    					}
    					else
    					{				
    				
                        	for(var j=0;j<leftArray.length; j++){				       
                           		if(score.proteinScore>leftArray[j] && score.proteinScore<=rightArray[j]){					
          						proteinScoreColorArray.push({
          						        proteinID:score.proteinID,
                                        proteinLocalization: score.proteinLocalization,
          								proteinScore: score.proteinScore,
          								scoreColor: colorArray[j],
          								percentScore: Math.round((100 / parseInt(scoreProtein[0].proteinScore)) * parseInt(score.proteinScore))
          								
                                      });	         							
          								
                        			}
                        	 }	
    				    }				
					
               }
			  
			  
			  
			  return proteinScoreColorArray;	
	
	} 
	
   function createStringExample(exampleType)
   {
   		var strData = "";
   		if(exampleType == 1)
		{
		    
		 	strData = "Eukaryota" +
					  "\n0-100" +
					  "\nProtein Id	Score	Localization	Gene Ontology" +
					  "\ntr|Q8STW1|Q8STW1_ENCCU	20	plasma membrane	This is not needed";
			readExample(strData);
		
		
		}
		else if (exampleType == 2)
		{
		 	strData = "Eukaryota" +
			"\n0-100"+
			"\nProtein Id	Score	Localization	Gene Ontology"+
			"\ntr|Q8STW1|Q8STW1_ENCCU	1	chloroplast	This is not needed"+
			"\ntr|Q8STW1|Q8STW1_ENCCU	2	chloroplast membrane	This is not needed"+
			"\ntr|Q8STW1|Q8STW1_ENCCU	100	cytoplasm	This is not needed"+
			"\ntr|Q8STW1|Q8STW1_ENCCU	3	endoplasmic reticulum	This is not needed"+
			"\ntr|Q8STW1|Q8STW1_ENCCU	4	endoplasmic reticulum membrane	This is not needed"+
			"\ntr|Q8STW1|Q8STW1_ENCCU	8	mitochondrion	This is not needed"+
			"\ntr|Q8STW1|Q8STW1_ENCCU	9	mitochondrion membrane	This is not needed"+
			"\ntr|Q8STW1|Q8STW1_ENCCU	10	nucleus	This is not needed"+
			"\ntr|Q8STW1|Q8STW1_ENCCU	11	nucleus membrane	This is not needed"+
			"\ntr|Q8STW1|Q8STW1_ENCCU	12	peroxisome	This is not needed"+
			"\ntr|Q8STW1|Q8STW1_ENCCU	13	peroxisome membrane	This is not needed"+
			"\ntr|Q8STW1|Q8STW1_ENCCU	14	plastid	This is not needed"+
			"\ntr|Q8STW1|Q8STW1_ENCCU	15	vacuole	This is not needed"+
			"\ntr|Q8STW1|Q8STW1_ENCCU	16	vacuole membrane	This is not needed";
			readExample(strData);
		}
		else if (exampleType == 3)
		{
		 	strData = "Eukaryota" +
					  "\n0-100"+
					  "\nProtein Id	Score	Localization	Gene Ontology"+
					  "\nsp|Q8SWH2|HSP7A_ENCCU	16	nucleus	This is not needed"+
					  "\ntr|Q8SQK2|Q8SQK2_ENCCU	2	nucleus	This is not needed"+
					  "\ntr|Q8STW1|Q8STW1_ENCCA	23	vacuole	This is not needed"+
					  "\ntr|Q8SQK2|Q8SQK2_ENCCU	80	peroxisome	This is not needed";	
			readExample(strData);	
		}
   }
	
   function readExample(strData)
   {
   			cellType = "";
            scoreProtein = [];	
        	scoreColorArray = [];
        	localizationColorArray = [];
        	isNotOneProtein = false;
   
   			//split the file contents into separate lines on encountering \R or \r\n or \n
                    var fileLines = strData.trim().split(/\r?\n/);  
            //Old version replace(/[\R\r\n]/g, ',').split(/[\,]+/g);                     
                    var fileLinesCount = fileLines.length;                        						                       
            //create two new arrays - for score and localization
                    var scoreArray = [];                                                
            //Omit the 1st two lines and start from the 3rd line
                                                      for (var i = 3; i < fileLines.length; i++) {
                              
                                                          //Separate the line into words on encountering a tab and print each word
                                                          var arrayWords = fileLines[i].replace(/[\t]/g, ',').split(/[\,]+/g);                            
                              							
                              							// Array containing protein scores													
      													if(arrayWords[1] >= 0)
      													{													
                                                                scoreArray.push({
                                                                    proteinID: arrayWords[0],
                                    								proteinScore: arrayWords[1],
                                                                    proteinLocalization: arrayWords[2]
                                                                });	
      													}					
                              							
                                                      }
                        																						  			
                                                //Assigning global variable of score array
                                                scoreProtein = scoreArray;																
                        						scoreProtein.sort(function(a,b) { return parseInt(b.proteinScore) - parseInt(a.proteinScore) } );									
                        
                                                //find out the type of cell by reading the first line in the input file
                                                cellType = fileLines[0].trim().toLowerCase();
                        						
                        						//To select correct cell picture
                                                selectCellPicture(); 
                        						                       	
                        						//Header				 
                        					    writeHeader('headerPP',"");		
                        						
                        						//Checking only one protein in file
                        						isOneProteinInFile();
                        						
                        						//Color of score
                        						scoreColorArray = definedColorScore(fileLines[1].trim().toLowerCase());												
												secondlineScore = fileLines[1].trim().toLowerCase();
                        						
                        						//Color of Protein number				
                        						localizationColorArray = definedColorLocalization();				
                        						
                        						//Checking only one protein in file
                        						if(isNotOneProtein)
                        						{					
                        									
                                						//To highlight cell's compartments
                                						for (var i = 0; i < localizationColorArray.length; i++) {
                                              					 var colorLoc = localizationColorArray[i];										
                        										        						
                                								highlightCompartments("",colorLoc.proteinLocalization,colorLoc.LocalizationColor);							   
                                         				}				   
                        						}
                        						else
                        						{						
                        									
                        								//To highlight cell's compartments
                                						for (var i = 0; i < scoreColorArray.length; i++) {
                                              					 var colorScore = scoreColorArray[i];								
                                								
                                								highlightCompartments(colorScore.proteinID,colorScore.proteinLocalization,colorScore.scoreColor);							   
                                         				}						
                        										
                        						 } 
   	    	
   }
		
	
	
   function readFile(fileInput,fileDisplayArea)
   {
   						   						
			var file = fileInput.files[0];			
            var textType = /text.*/;	
			
			                       			
           if (file.type.match(textType)) {
                        			   
                                        var reader = new FileReader();
                                        reader.onload = function (e) {
                                            var words = (function () {
                        
                                                //split the file contents into separate lines on encountering \R or \r\n or \n
                                                var fileLines = reader.result.trim().split(/\r?\n/);												 
                        						//Old version replace(/[\R\r\n]/g, ',').split(/[\,]+/g);                     
                                                var fileLinesCount = fileLines.length;
                        						                       
                                                //create two new arrays - for score and localization
                                                var scoreArray = [];
                                                
                                                //Omit the 1st two lines and start from the 3rd line
                                                for (var i = 3; i < fileLines.length; i++) {
                        
                                                    //Separate the line into words on encountering a tab and print each word
                                                    var arrayWords = fileLines[i].replace(/[\t]/g, ',').split(/[\,]+/g);                            
                        							
                        							// Array containing protein scores													
													if(arrayWords[1] >= 0)
													{													
                                                          scoreArray.push({
                                                              proteinID: arrayWords[0],
                              								proteinScore: arrayWords[1],
                                                              proteinLocalization: arrayWords[2]
                                                          });	
													}					
                        							
                                                }
                        																						  			
                                                //Assigning global variable of score array
                                                scoreProtein = scoreArray;						
                        						scoreProtein.sort(function(a,b) { return parseInt(b.proteinScore) - parseInt(a.proteinScore) } );									
                        
                                                //find out the type of cell by reading the first line in the input file
                                                cellType = fileLines[0].trim().toLowerCase();
                        						
                        						//To select correct cell picture
                                                selectCellPicture(); 
                        						                       	
                        						//Header				 
                        					    writeHeader('headerPP',"");		
                        						
                        						//Checking only one protein in file
                        						isOneProteinInFile();	
                        						
                        						//Color of score
                        						scoreColorArray = definedColorScore(fileLines[1].trim().toLowerCase());	
												
												secondlineScore = fileLines[1].trim().toLowerCase();
                        						
                        						//Color of Protein number				
                        						localizationColorArray = definedColorLocalization();				
                        						
                        						//Checking only one protein in file
                        						if(isNotOneProtein)
                        						{					
                        									
                                						//To highlight cell's compartments
                                						for (var i = 0; i < localizationColorArray.length; i++) {
                                              					 var colorLoc = localizationColorArray[i];										
                        										        						
                                								highlightCompartments("",colorLoc.proteinLocalization,colorLoc.LocalizationColor);							   
                                         				}				   
                        						}
                        						else
                        						{						
                        									
                        								//To highlight cell's compartments
                                						for (var i = 0; i < scoreColorArray.length; i++) {
                                              					 var colorScore = scoreColorArray[i];								
                                								
                                								highlightCompartments(colorScore.proteinID,colorScore.proteinLocalization,colorScore.scoreColor);							   
                                         				}						
                        										
                        						 }
                        
                                            } ());
                        
                                        }
                                        reader.readAsText(file);
                        
                                    }
                        
             else {
                      fileDisplayArea.innerText = "File not supported!";
                  }	
									
   }
	
   view.setPath = function(path) {
   	view.path = path;
   }	

   view.main = function() { 


   	   //Hack for working callbacks in main()	
   	   var callStringExample1 = function() {
   	   	 createStringExample('1');
   	   }
   	   var callStringExample2 = function() {
   	   	 createStringExample('2');
   	   }
   	   var callStringExample3 = function() {
   	   	 createStringExample('3');
   	   }

	   var rdbCase1 = getPopupObject('case1');
	   rdbCase1.addEventListener("click", callStringExample1);
	   
	   var rdbCase2 = getPopupObject('case2');
	   rdbCase2.addEventListener("click", callStringExample2);
	   
	   var rdbCase3 = getPopupObject('case3');
	   rdbCase3.addEventListener("click", callStringExample3);
	   
	   var selectLoc = getPopupObject('ddlColorLoc');
   	   selectLoc.addEventListener("change", getDropdownListSelectedColorLoc);	
	   
	   var selectScore = getPopupObject('ddlColorScore');
   	   selectScore.addEventListener("change", getDropdownListSelectedColorScore);		
   	
        var fileInput = document.getElementById('fileInput');
        var fileDisplayArea = document.getElementById('fileDisplayArea');	
		
		var divBtBack = getPopupObject('btnBack');
        		if(divBtBack.hasChildNodes())
				{			
					   if(fileInput.files[0])
					   {		   	
                       				readFile(fileInput,fileDisplayArea);
					   }
					   else
					   {
					   	   			createStringExample('3');
					   }							   
				}
				else
				{					
        			fileInput.addEventListener('change', function (e) {
					   readFile(fileInput,fileDisplayArea);            
        			});
      	   		}
					  
    }
	
	view.main();

};

module.exports = {
	cell : subcellularlocalization,
	view : view,
};



},{"./svgdata":1,"d3":2}]},{},[]);
