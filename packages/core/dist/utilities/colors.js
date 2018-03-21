'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.color = exports.fill = exports.colors = undefined;

var _emotion = require('emotion');

// import { lighten } from 'colorutilities';

// const darken = (color, amount) => lighten(color, -amount);

var colors = exports.colors = {}; /* flow */


colors.primary = '#0071bc';
colors.primaryDarker = '#205493';
colors.primaryDarkest = '#112e51';
colors.primaryAlt = '#02bfe7';
colors.primaryAltDark = '#00a6d2';
colors.primaryAltDarkest = '#046b99';
colors.primaryAltLight = '#9bdaf1'; // lighten($color-primaryAlt, 60%)
colors.primaryAltLightest = '#e1f3f8'; // lighten($color-primaryAlt, 90%)
colors.secondary = '#e31c3d';
colors.secondaryDark = '#cd2026';
colors.secondaryDarkest = '#981b1e';
colors.secondaryLight = '#e59393'; // lighten($color-secondary, 60%)
colors.secondaryLightest = '#f9dede'; // lighten($color-secondary, 90%)
colors.white = '#ffffff';
colors.base = '#212121';
colors.black = '#000000';
colors.grayDark = '#323a45';
colors.gray = '#5b616b'; // lighten($color-grayDark, 20%)
colors.grayMedium = '#757575'; // lightest gray that passes color contrast
colors.grayLight = '#aeb0b5'; // lighten($color-grayDark, 60%)
colors.grayLighter = '#d6d7d9'; // lighten($color-grayDark, 80%)
colors.grayLightest = '#f1f1f1'; // lighten($color-grayDark, 91%)
colors.grayWarmDark = '#494440';
colors.grayWarmLight = '#e4e2e0'; // lighten($color-grayWarmDark, 90%)
colors.grayCoolLight = '#dce4ef'; // lighten($color-primary, 90%)
colors.gold = '#fdb81e';
colors.goldLight = '#f9c642'; //  lighten($color-gold, 20%)
colors.goldLighter = '#fad980'; //  lighten($color-gold, 60%)
colors.goldLightest = '#fff1d2'; //  lighten($color-gold, 83%)
colors.green = '#2e8540';
colors.greenLight = '#4aa564'; // lighten($color-green, 20%)
colors.greenLighter = '#94bfa2'; // lighten($color-green, 60%)
colors.greenLightest = '#e7f4e4'; // lighten($color-green, 60%)
colors.coolBlue = '#205493';
colors.coolBlueLight = '#4773aa'; // lighten($colorCoolBlue, 20%)
colors.coolBlueLighter = '#8ba6ca'; // lighten($colorCoolBlue, 60%)
colors.coolBlueLightest = '#dce4ef'; // lighten($colorCoolBlue, 90%)
colors.focus = '#3e94cf';
colors.visited = '#4c2c92';
colors.muted = colors.gray;
colors.baseInverse = colors.white;
colors.mutedInverse = '#bac5cf';

function createUtility(cssFunction) {
  return Object.keys(colors).reduce(function (utility, colorName) {
    var color = colors[colorName];
    utility[colorName] = cssFunction(color);
    return utility;
  }, {});
}

var fill = exports.fill = createUtility(function (color) {
  return (/*#__PURE__*/(0, _emotion.css)('background-color:', color, ' !important;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdGllcy9jb2xvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRPIiwiZmlsZSI6InV0aWxpdGllcy9jb2xvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmbG93ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcbi8vIGltcG9ydCB7IGxpZ2h0ZW4gfSBmcm9tICdjb2xvcnV0aWxpdGllcyc7XG5cbi8vIGNvbnN0IGRhcmtlbiA9IChjb2xvciwgYW1vdW50KSA9PiBsaWdodGVuKGNvbG9yLCAtYW1vdW50KTtcblxuZXhwb3J0IGNvbnN0IGNvbG9ycyA9IHt9O1xuXG5jb2xvcnMucHJpbWFyeSA9ICcjMDA3MWJjJztcbmNvbG9ycy5wcmltYXJ5RGFya2VyID0gJyMyMDU0OTMnO1xuY29sb3JzLnByaW1hcnlEYXJrZXN0ID0gJyMxMTJlNTEnO1xuY29sb3JzLnByaW1hcnlBbHQgPSAnIzAyYmZlNyc7XG5jb2xvcnMucHJpbWFyeUFsdERhcmsgPSAnIzAwYTZkMic7XG5jb2xvcnMucHJpbWFyeUFsdERhcmtlc3QgPSAnIzA0NmI5OSc7XG5jb2xvcnMucHJpbWFyeUFsdExpZ2h0ID0gJyM5YmRhZjEnOyAvLyBsaWdodGVuKCRjb2xvci1wcmltYXJ5QWx0LCA2MCUpXG5jb2xvcnMucHJpbWFyeUFsdExpZ2h0ZXN0ID0gJyNlMWYzZjgnOyAvLyBsaWdodGVuKCRjb2xvci1wcmltYXJ5QWx0LCA5MCUpXG5jb2xvcnMuc2Vjb25kYXJ5ID0gJyNlMzFjM2QnO1xuY29sb3JzLnNlY29uZGFyeURhcmsgPSAnI2NkMjAyNic7XG5jb2xvcnMuc2Vjb25kYXJ5RGFya2VzdCA9ICcjOTgxYjFlJztcbmNvbG9ycy5zZWNvbmRhcnlMaWdodCA9ICcjZTU5MzkzJzsgLy8gbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCA2MCUpXG5jb2xvcnMuc2Vjb25kYXJ5TGlnaHRlc3QgPSAnI2Y5ZGVkZSc7IC8vIGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgOTAlKVxuY29sb3JzLndoaXRlID0gJyNmZmZmZmYnO1xuY29sb3JzLmJhc2UgPSAnIzIxMjEyMSc7XG5jb2xvcnMuYmxhY2sgPSAnIzAwMDAwMCc7XG5jb2xvcnMuZ3JheURhcmsgPSAnIzMyM2E0NSc7XG5jb2xvcnMuZ3JheSA9ICcjNWI2MTZiJzsgLy8gbGlnaHRlbigkY29sb3ItZ3JheURhcmssIDIwJSlcbmNvbG9ycy5ncmF5TWVkaXVtID0gJyM3NTc1NzUnOyAvLyBsaWdodGVzdCBncmF5IHRoYXQgcGFzc2VzIGNvbG9yIGNvbnRyYXN0XG5jb2xvcnMuZ3JheUxpZ2h0ID0gJyNhZWIwYjUnOyAvLyBsaWdodGVuKCRjb2xvci1ncmF5RGFyaywgNjAlKVxuY29sb3JzLmdyYXlMaWdodGVyID0gJyNkNmQ3ZDknOyAvLyBsaWdodGVuKCRjb2xvci1ncmF5RGFyaywgODAlKVxuY29sb3JzLmdyYXlMaWdodGVzdCA9ICcjZjFmMWYxJzsgLy8gbGlnaHRlbigkY29sb3ItZ3JheURhcmssIDkxJSlcbmNvbG9ycy5ncmF5V2FybURhcmsgPSAnIzQ5NDQ0MCc7XG5jb2xvcnMuZ3JheVdhcm1MaWdodCA9ICcjZTRlMmUwJzsgLy8gbGlnaHRlbigkY29sb3ItZ3JheVdhcm1EYXJrLCA5MCUpXG5jb2xvcnMuZ3JheUNvb2xMaWdodCA9ICcjZGNlNGVmJzsgLy8gbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgOTAlKVxuY29sb3JzLmdvbGQgPSAnI2ZkYjgxZSc7XG5jb2xvcnMuZ29sZExpZ2h0ID0gJyNmOWM2NDInOyAvLyAgbGlnaHRlbigkY29sb3ItZ29sZCwgMjAlKVxuY29sb3JzLmdvbGRMaWdodGVyID0gJyNmYWQ5ODAnOyAvLyAgbGlnaHRlbigkY29sb3ItZ29sZCwgNjAlKVxuY29sb3JzLmdvbGRMaWdodGVzdCA9ICcjZmZmMWQyJzsgLy8gIGxpZ2h0ZW4oJGNvbG9yLWdvbGQsIDgzJSlcbmNvbG9ycy5ncmVlbiA9ICcjMmU4NTQwJztcbmNvbG9ycy5ncmVlbkxpZ2h0ID0gJyM0YWE1NjQnOyAvLyBsaWdodGVuKCRjb2xvci1ncmVlbiwgMjAlKVxuY29sb3JzLmdyZWVuTGlnaHRlciA9ICcjOTRiZmEyJzsgLy8gbGlnaHRlbigkY29sb3ItZ3JlZW4sIDYwJSlcbmNvbG9ycy5ncmVlbkxpZ2h0ZXN0ID0gJyNlN2Y0ZTQnOyAvLyBsaWdodGVuKCRjb2xvci1ncmVlbiwgNjAlKVxuY29sb3JzLmNvb2xCbHVlID0gJyMyMDU0OTMnO1xuY29sb3JzLmNvb2xCbHVlTGlnaHQgPSAnIzQ3NzNhYSc7IC8vIGxpZ2h0ZW4oJGNvbG9yQ29vbEJsdWUsIDIwJSlcbmNvbG9ycy5jb29sQmx1ZUxpZ2h0ZXIgPSAnIzhiYTZjYSc7IC8vIGxpZ2h0ZW4oJGNvbG9yQ29vbEJsdWUsIDYwJSlcbmNvbG9ycy5jb29sQmx1ZUxpZ2h0ZXN0ID0gJyNkY2U0ZWYnOyAvLyBsaWdodGVuKCRjb2xvckNvb2xCbHVlLCA5MCUpXG5jb2xvcnMuZm9jdXMgPSAnIzNlOTRjZic7XG5jb2xvcnMudmlzaXRlZCA9ICcjNGMyYzkyJztcbmNvbG9ycy5tdXRlZCA9IGNvbG9ycy5ncmF5O1xuY29sb3JzLmJhc2VJbnZlcnNlID0gY29sb3JzLndoaXRlO1xuY29sb3JzLm11dGVkSW52ZXJzZSA9ICcjYmFjNWNmJztcblxuZnVuY3Rpb24gY3JlYXRlVXRpbGl0eShjc3NGdW5jdGlvbjogKGNvbG9yLCBzaGFkZSkgPT4gc3RyaW5nKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhjb2xvcnMpLnJlZHVjZSgodXRpbGl0eSwgY29sb3JOYW1lKSA9PiB7XG4gICAgY29uc3QgY29sb3IgPSBjb2xvcnNbY29sb3JOYW1lXTtcbiAgICB1dGlsaXR5W2NvbG9yTmFtZV0gPSBjc3NGdW5jdGlvbihjb2xvcik7XG4gICAgcmV0dXJuIHV0aWxpdHk7XG4gIH0sIHt9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGZpbGwgPSBjcmVhdGVVdGlsaXR5KFxuICBjb2xvciA9PlxuICAgIGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9ICFpbXBvcnRhbnQ7XG4gICAgYFxuKTtcbmV4cG9ydCBjb25zdCBjb2xvciA9IGNyZWF0ZVV0aWxpdHkoXG4gIGNvbG9yID0+XG4gICAgY3NzYFxuICAgICAgY29sb3I6ICR7Y29sb3J9ICFpbXBvcnRhbnQ7XG4gICAgYFxuKTtcbiJdfQ== */', 'label:fill;')
  );
});
var color = exports.color = createUtility(function (color) {
  return (/*#__PURE__*/(0, _emotion.css)('color:', color, ' !important;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdGllcy9jb2xvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVPIiwiZmlsZSI6InV0aWxpdGllcy9jb2xvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmbG93ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcbi8vIGltcG9ydCB7IGxpZ2h0ZW4gfSBmcm9tICdjb2xvcnV0aWxpdGllcyc7XG5cbi8vIGNvbnN0IGRhcmtlbiA9IChjb2xvciwgYW1vdW50KSA9PiBsaWdodGVuKGNvbG9yLCAtYW1vdW50KTtcblxuZXhwb3J0IGNvbnN0IGNvbG9ycyA9IHt9O1xuXG5jb2xvcnMucHJpbWFyeSA9ICcjMDA3MWJjJztcbmNvbG9ycy5wcmltYXJ5RGFya2VyID0gJyMyMDU0OTMnO1xuY29sb3JzLnByaW1hcnlEYXJrZXN0ID0gJyMxMTJlNTEnO1xuY29sb3JzLnByaW1hcnlBbHQgPSAnIzAyYmZlNyc7XG5jb2xvcnMucHJpbWFyeUFsdERhcmsgPSAnIzAwYTZkMic7XG5jb2xvcnMucHJpbWFyeUFsdERhcmtlc3QgPSAnIzA0NmI5OSc7XG5jb2xvcnMucHJpbWFyeUFsdExpZ2h0ID0gJyM5YmRhZjEnOyAvLyBsaWdodGVuKCRjb2xvci1wcmltYXJ5QWx0LCA2MCUpXG5jb2xvcnMucHJpbWFyeUFsdExpZ2h0ZXN0ID0gJyNlMWYzZjgnOyAvLyBsaWdodGVuKCRjb2xvci1wcmltYXJ5QWx0LCA5MCUpXG5jb2xvcnMuc2Vjb25kYXJ5ID0gJyNlMzFjM2QnO1xuY29sb3JzLnNlY29uZGFyeURhcmsgPSAnI2NkMjAyNic7XG5jb2xvcnMuc2Vjb25kYXJ5RGFya2VzdCA9ICcjOTgxYjFlJztcbmNvbG9ycy5zZWNvbmRhcnlMaWdodCA9ICcjZTU5MzkzJzsgLy8gbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCA2MCUpXG5jb2xvcnMuc2Vjb25kYXJ5TGlnaHRlc3QgPSAnI2Y5ZGVkZSc7IC8vIGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgOTAlKVxuY29sb3JzLndoaXRlID0gJyNmZmZmZmYnO1xuY29sb3JzLmJhc2UgPSAnIzIxMjEyMSc7XG5jb2xvcnMuYmxhY2sgPSAnIzAwMDAwMCc7XG5jb2xvcnMuZ3JheURhcmsgPSAnIzMyM2E0NSc7XG5jb2xvcnMuZ3JheSA9ICcjNWI2MTZiJzsgLy8gbGlnaHRlbigkY29sb3ItZ3JheURhcmssIDIwJSlcbmNvbG9ycy5ncmF5TWVkaXVtID0gJyM3NTc1NzUnOyAvLyBsaWdodGVzdCBncmF5IHRoYXQgcGFzc2VzIGNvbG9yIGNvbnRyYXN0XG5jb2xvcnMuZ3JheUxpZ2h0ID0gJyNhZWIwYjUnOyAvLyBsaWdodGVuKCRjb2xvci1ncmF5RGFyaywgNjAlKVxuY29sb3JzLmdyYXlMaWdodGVyID0gJyNkNmQ3ZDknOyAvLyBsaWdodGVuKCRjb2xvci1ncmF5RGFyaywgODAlKVxuY29sb3JzLmdyYXlMaWdodGVzdCA9ICcjZjFmMWYxJzsgLy8gbGlnaHRlbigkY29sb3ItZ3JheURhcmssIDkxJSlcbmNvbG9ycy5ncmF5V2FybURhcmsgPSAnIzQ5NDQ0MCc7XG5jb2xvcnMuZ3JheVdhcm1MaWdodCA9ICcjZTRlMmUwJzsgLy8gbGlnaHRlbigkY29sb3ItZ3JheVdhcm1EYXJrLCA5MCUpXG5jb2xvcnMuZ3JheUNvb2xMaWdodCA9ICcjZGNlNGVmJzsgLy8gbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgOTAlKVxuY29sb3JzLmdvbGQgPSAnI2ZkYjgxZSc7XG5jb2xvcnMuZ29sZExpZ2h0ID0gJyNmOWM2NDInOyAvLyAgbGlnaHRlbigkY29sb3ItZ29sZCwgMjAlKVxuY29sb3JzLmdvbGRMaWdodGVyID0gJyNmYWQ5ODAnOyAvLyAgbGlnaHRlbigkY29sb3ItZ29sZCwgNjAlKVxuY29sb3JzLmdvbGRMaWdodGVzdCA9ICcjZmZmMWQyJzsgLy8gIGxpZ2h0ZW4oJGNvbG9yLWdvbGQsIDgzJSlcbmNvbG9ycy5ncmVlbiA9ICcjMmU4NTQwJztcbmNvbG9ycy5ncmVlbkxpZ2h0ID0gJyM0YWE1NjQnOyAvLyBsaWdodGVuKCRjb2xvci1ncmVlbiwgMjAlKVxuY29sb3JzLmdyZWVuTGlnaHRlciA9ICcjOTRiZmEyJzsgLy8gbGlnaHRlbigkY29sb3ItZ3JlZW4sIDYwJSlcbmNvbG9ycy5ncmVlbkxpZ2h0ZXN0ID0gJyNlN2Y0ZTQnOyAvLyBsaWdodGVuKCRjb2xvci1ncmVlbiwgNjAlKVxuY29sb3JzLmNvb2xCbHVlID0gJyMyMDU0OTMnO1xuY29sb3JzLmNvb2xCbHVlTGlnaHQgPSAnIzQ3NzNhYSc7IC8vIGxpZ2h0ZW4oJGNvbG9yQ29vbEJsdWUsIDIwJSlcbmNvbG9ycy5jb29sQmx1ZUxpZ2h0ZXIgPSAnIzhiYTZjYSc7IC8vIGxpZ2h0ZW4oJGNvbG9yQ29vbEJsdWUsIDYwJSlcbmNvbG9ycy5jb29sQmx1ZUxpZ2h0ZXN0ID0gJyNkY2U0ZWYnOyAvLyBsaWdodGVuKCRjb2xvckNvb2xCbHVlLCA5MCUpXG5jb2xvcnMuZm9jdXMgPSAnIzNlOTRjZic7XG5jb2xvcnMudmlzaXRlZCA9ICcjNGMyYzkyJztcbmNvbG9ycy5tdXRlZCA9IGNvbG9ycy5ncmF5O1xuY29sb3JzLmJhc2VJbnZlcnNlID0gY29sb3JzLndoaXRlO1xuY29sb3JzLm11dGVkSW52ZXJzZSA9ICcjYmFjNWNmJztcblxuZnVuY3Rpb24gY3JlYXRlVXRpbGl0eShjc3NGdW5jdGlvbjogKGNvbG9yLCBzaGFkZSkgPT4gc3RyaW5nKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhjb2xvcnMpLnJlZHVjZSgodXRpbGl0eSwgY29sb3JOYW1lKSA9PiB7XG4gICAgY29uc3QgY29sb3IgPSBjb2xvcnNbY29sb3JOYW1lXTtcbiAgICB1dGlsaXR5W2NvbG9yTmFtZV0gPSBjc3NGdW5jdGlvbihjb2xvcik7XG4gICAgcmV0dXJuIHV0aWxpdHk7XG4gIH0sIHt9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGZpbGwgPSBjcmVhdGVVdGlsaXR5KFxuICBjb2xvciA9PlxuICAgIGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9ICFpbXBvcnRhbnQ7XG4gICAgYFxuKTtcbmV4cG9ydCBjb25zdCBjb2xvciA9IGNyZWF0ZVV0aWxpdHkoXG4gIGNvbG9yID0+XG4gICAgY3NzYFxuICAgICAgY29sb3I6ICR7Y29sb3J9ICFpbXBvcnRhbnQ7XG4gICAgYFxuKTtcbiJdfQ== */', 'label:color;')
  );
});