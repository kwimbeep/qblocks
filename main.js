/*********************************
 QuickBlocks - main.js (2013)
 Author: Marcis Berzins
 Mail: berzins.marcis@gmail.com
 Licence: http://www.gnu.org/licences/gpl-3.0.txt
 *********************************/

function Game() {
  this.WIDTH_PX = 380;
  this.HEIGHT_PX = 520;
  this.MENU_LEFT_PX = 285; this.MENU_TOP_PX = 29; this.MENU_WIDTH_PX = 160; this.MENU_ITEM_HEIGHT_PX = 40;
  this.MATRIX_WIDTH_PX = 180;
  this.MATRIX_HEIGHT_PX = 360;
  this.INFO_LEFT_PX = 285; this.INFO_TOP_PX = 145;
  this.MATRIX_LEFT_PX = 10; this.MATRIX_TOP_PX = 10;
  this.NEXT_MATRIX_LEFT_PX = 255; this.NEXT_MATRIX_TOP_PX = 310;
  this.FIGURE_START_X = 1; this.FIGURE_START_Y = -1;
  this.NEXT_FIGURE_START_X = 0; this.NEXT_FIGURE_START_Y = 0;
  this.MATRIX_WIDTH = 6; this.MATRIX_HEIGHT = 12;
  this.NEXT_MATRIX_WIDTH = 4; this.NEXT_MATRIX_HEIGHT = 4;
  this.BLOCK_WIDTH_PX = (this.MATRIX_WIDTH_PX / this.MATRIX_WIDTH); this.BLOCK_HEIGHT_PX = (this.MATRIX_HEIGHT_PX / this.MATRIX_HEIGHT);
  this.NEXT_BLOCK_WIDTH_PX = 15; this.NEXT_BLOCK_HEIGHT_PX = 15;
  
  this.FIGURES = [];
  this.FIGURES.push({
    name: 'Classic',
    set: []
  });
  this.FIGURES[0].set.push([
    [[0,0,0,0], [1,1,0,0], [0,1,1,0], [0,0,0,0]],
    [[0,0,0,0], [0,0,1,0], [0,1,1,0], [0,1,0,0]], // ##
    [[0,0,0,0], [1,1,0,0], [0,1,1,0], [0,0,0,0]], //  ##
    [[0,0,0,0], [0,0,1,0], [0,1,1,0], [0,1,0,0]]
  ]);
  this.FIGURES[0].set.push([
    [[0,0,0,0], [0,1,1,0], [1,1,0,0], [0,0,0,0]],
    [[0,0,0,0], [1,0,0,0], [1,1,0,0], [0,1,0,0]], //  ##
    [[0,0,0,0], [0,1,1,0], [1,1,0,0], [0,0,0,0]], // ##
    [[0,0,0,0], [1,0,0,0], [1,1,0,0], [0,1,0,0]]
  ]);
  this.FIGURES[0].set.push([
    [[0,0,0,0], [1,1,1,1], [0,0,0,0], [0,0,0,0]],
    [[0,1,0,0], [0,1,0,0], [0,1,0,0], [0,1,0,0]], // ####
    [[0,0,0,0], [1,1,1,1], [0,0,0,0], [0,0,0,0]],
    [[0,1,0,0], [0,1,0,0], [0,1,0,0], [0,1,0,0]]
  ]);
  this.FIGURES[0].set.push([
    [[0,0,0,0], [0,1,1,0], [0,1,1,0], [0,0,0,0]],
    [[0,0,0,0], [0,1,1,0], [0,1,1,0], [0,0,0,0]], // ##
    [[0,0,0,0], [0,1,1,0], [0,1,1,0], [0,0,0,0]], // ##
    [[0,0,0,0], [0,1,1,0], [0,1,1,0], [0,0,0,0]]
  ]);
  this.FIGURES[0].set.push([
    [[0,0,0,0], [1,1,1,0], [0,1,0,0], [0,0,0,0]],
    [[0,1,0,0], [1,1,0,0], [0,1,0,0], [0,0,0,0]], // ###
    [[0,1,0,0], [1,1,1,0], [0,0,0,0], [0,0,0,0]], //  #
    [[0,1,0,0], [0,1,1,0], [0,1,0,0], [0,0,0,0]]
  ]);
  this.FIGURES[0].set.push([
    [[0,0,0,0], [1,1,1,0], [1,0,0,0], [0,0,0,0]],
    [[1,1,0,0], [0,1,0,0], [0,1,0,0], [0,0,0,0]], // ###
    [[0,0,1,0], [1,1,1,0], [0,0,0,0], [0,0,0,0]], // #
    [[0,1,0,0], [0,1,0,0], [0,1,1,0], [0,0,0,0]]
  ]);
  this.FIGURES[0].set.push([
    [[0,0,0,0], [1,1,1,0], [0,0,1,0], [0,0,0,0]],
    [[0,1,0,0], [0,1,0,0], [1,1,0,0], [0,0,0,0]], // ###
    [[1,0,0,0], [1,1,1,0], [0,0,0,0], [0,0,0,0]], //   #
    [[0,1,1,0], [0,1,0,0], [0,1,0,0], [0,0,0,0]]
  ]);
  this.FIGURES.push({
    name: 'Quick Blocks',
    set: []
  });
  this.FIGURES[1].set.push([
    [[0,0,0,0], [0,1,0,0], [0,1,1,0], [0,0,0,0]],
    [[0,0,0,0], [0,1,1,0], [0,1,0,0], [0,0,0,0]], // #
    [[0,0,0,0], [0,1,1,0], [0,0,1,0], [0,0,0,0]], // ##
    [[0,0,0,0], [0,0,1,0], [0,1,1,0], [0,0,0,0]]
  ]);
  this.FIGURES[1].set.push([
    [[0,0,0,0], [1,1,1,0], [0,1,0,0], [0,0,0,0]],
    [[0,1,0,0], [1,1,0,0], [0,1,0,0], [0,0,0,0]], // ###
    [[0,1,0,0], [1,1,1,0], [0,0,0,0], [0,0,0,0]], //  #
    [[0,1,0,0], [0,1,1,0], [0,1,0,0], [0,0,0,0]]
  ]);
  this.FIGURES[1].set.push([
    [[0,0,0,0], [1,1,1,0], [1,0,0,0], [0,0,0,0]],
    [[1,1,0,0], [0,1,0,0], [0,1,0,0], [0,0,0,0]], // ###
    [[0,0,1,0], [1,1,1,0], [0,0,0,0], [0,0,0,0]], // #
    [[0,1,0,0], [0,1,0,0], [0,1,1,0], [0,0,0,0]]
  ]);
  this.FIGURES[1].set.push([
    [[0,0,0,0], [1,1,1,0], [0,0,1,0], [0,0,0,0]],
    [[0,1,0,0], [0,1,0,0], [1,1,0,0], [0,0,0,0]], // ###
    [[1,0,0,0], [1,1,1,0], [0,0,0,0], [0,0,0,0]], //   #
    [[0,1,1,0], [0,1,0,0], [0,1,0,0], [0,0,0,0]]
  ]);
  this.FIGURES[1].set.push([
    [[0,0,0,0], [0,1,0,0], [0,0,1,0], [0,0,0,0]],
    [[0,0,0,0], [0,0,1,0], [0,1,0,0], [0,0,0,0]], // #
    [[0,0,0,0], [0,1,0,0], [0,0,1,0], [0,0,0,0]], //  #
    [[0,0,0,0], [0,0,1,0], [0,1,0,0], [0,0,0,0]]
  ]);
  this.FIGURES[1].set.push([
    [[0,0,0,0], [1,1,0,0], [0,1,1,0], [0,0,0,0]],
    [[0,0,0,0], [0,0,1,0], [0,1,1,0], [0,1,0,0]], // ##
    [[0,0,0,0], [1,1,0,0], [0,1,1,0], [0,0,0,0]], //  ##
    [[0,0,0,0], [0,0,1,0], [0,1,1,0], [0,1,0,0]]
  ]);
  this.FIGURES[1].set.push([
    [[0,0,0,0], [0,1,1,0], [1,1,0,0], [0,0,0,0]],
    [[0,0,0,0], [1,0,0,0], [1,1,0,0], [0,1,0,0]], //  ##
    [[0,0,0,0], [0,1,1,0], [1,1,0,0], [0,0,0,0]], // ##
    [[0,0,0,0], [1,0,0,0], [1,1,0,0], [0,1,0,0]]
  ]);
  this.FIGURES[1].set.push([
    [[0,0,0,0], [1,1,1,0], [0,0,0,0], [0,0,0,0]],
    [[0,1,0,0], [0,1,0,0], [0,1,0,0], [0,0,0,0]], // ###
    [[0,0,0,0], [1,1,1,0], [0,0,0,0], [0,0,0,0]],
    [[0,1,0,0], [0,1,0,0], [0,1,0,0], [0,0,0,0]]
  ]);
  this.FIGURES[1].set.push([
    [[0,0,0,0], [1,1,1,0], [1,0,1,0], [0,0,0,0]],
    [[1,1,0,0], [0,1,0,0], [1,1,0,0], [0,0,0,0]], // ###
    [[1,0,1,0], [1,1,1,0], [0,0,0,0], [0,0,0,0]], // # #
    [[0,1,1,0], [0,1,0,0], [0,1,1,0], [0,0,0,0]]
  ]);
  
  this.figureSetIndex = 1;
  this.figureSet = this.FIGURES[this.figureSetIndex];
  
  this.canvas = 0;
  this.ctx = 0;
  
  this.timeSinceLastFrame = 0;
  this.frameTime = 0;
  
  this.speeds = [700, 500, 400, 300, 200];
  this.levelStep = 20;
  this.lineScores = [5, 20, 50, 80, 120];
  this.playing = false;
  this.paused = false;
  this.falling = false;
  this.justPlaced = false;
  
  this.level = 0;
  this.score = 0;
  this.lineCount = 0;
  
  this.figure = null;
  this.nextFigure = null;
  this.matrix = null;
  this.nextMatrix = null;
  
  this.info = {'Lines:': '', 'Score:': '', 'Level:': ''};
  this.mouse = {x: 0, y: 0, move: false, down: false, up: false, hover: true};
  this.menu = null;
  this.controls = null;
}

Game.prototype.handleKeyDown = function(e) {
  //this.info['Key: '] = e.keyCode;
  if (e.keyCode == 38) { e.preventDefault(); this.figure.isRotate = true; } //up
  if (e.keyCode == 37) { e.preventDefault(); this.figure.isLeft = true; } //left
  if (e.keyCode == 39) { e.preventDefault(); this.figure.isRight = true; } //right
  if (e.keyCode == 40) { e.preventDefault(); if (!this.falling) { this.fall(true); } } //down
  if (e.keyCode == 13) { if (!this.playing && !this.paused) { this.startGame(); } } //enter
  if ((e.keyCode == 27) || (e.keyCode == 80)) { if (this.playing || this.paused) { this.pauseGame(); } } //esc or p
};

Game.prototype.handleKeyUp = function(e) {
  //this.controls.deactivateAll();
  if (e.keyCode == 40) { this.fall(false); } //up
};

Game.prototype.handleMouseMove = function(e) { var c = getMouseCoordinates(this.canvas, e); this.mouse.x = c.x; this.mouse.y = c.y; this.mouse.move = true; };
Game.prototype.handleMouseDown = function(e) { this.mouse.down = true; };
Game.prototype.handleMouseUp = function(e) { this.mouse.down = false; this.mouse.up = true; };

Game.prototype.handleTouch = function(e, type) {
  e.preventDefault();
  if (type == 'up') {
    this.handleMouseUp(e);
    this.mouse.hover = false;
  } else {
    if (e.touches && e.touches.length) {
      for (var i = 0; i < e.touches.length; i++) {
        if (type == 'move') { this.handleMouseMove(e.touches[i]); }
        else if (type == 'down') {
          var c = getMouseCoordinates(this.canvas, e.touches[i]);
          this.mouse.x = c.x; this.mouse.y = c.y;
          this.handleMouseDown(e.touches[i]);
        }
      }
    }
  }
};

Game.prototype.handleMouse = function() {
  if (this.mouse.move) {
    this.menu.check(this.mouse.x, this.mouse.y, this.mouse.down);
    this.controls.check(this.mouse.x, this.mouse.y, this.mouse.down);
    this.mouse.move = false;
  } else if (this.mouse.down) {
    this.menu.check(this.mouse.x, this.mouse.y, this.mouse.down);
    var button = this.controls.check(this.mouse.x, this.mouse.y, this.mouse.down);
    if (button) {
      if (button == 'rotate') {
        this.figure.isRotate = true;
      } else if (button == 'left') {
        this.figure.isLeft = true;
      } else if (button == 'right') {
        this.figure.isRight = true;
      } else if (button == 'down') {
        if (!this.falling) { this.fall(true); }
      }
      this.mouse.down = false;
    }
  } else if (this.mouse.up) {
    var button = (this.menu.check(this.mouse.x, this.mouse.y, false, this.mouse.hover) || (this.controls.check(this.mouse.x, this.mouse.y, false, this.mouse.hover)));
    if (button) {
      if (button == 'start') {
        if (!this.playing && !this.paused) {
          this.startGame();
        } else {
          this.pauseGame();
        }
      } else if (button == 'reset') {
        this.localStorageScore(-1);
      } else if (button == 'figureset') {
        this.changeFigureSet();
      } else if (button == 'down') {
        this.fall(false);
      }
    }
    this.mouse.up = false;
    this.mouse.hover = true;
  }
};

Game.prototype.startGame = function() {
  this.level = 0;
  this.score = 0;
  this.lineCount = 0;
  this.matrix.reset();
  this.getNextFigure();
  this.menu.items.start.text = 'Pause';
  this.playing = true;
};

Game.prototype.pauseGame = function() {
  this.playing = !this.playing;
  this.paused = !this.paused;
  this.menu.items.start.text = (this.paused) ? 'Unpause' : 'Pause';
};

Game.prototype.gameOver = function() {
  this.playing = false;
  this.localStorageScore(this.score);
  this.menu.items.start.text = 'Start';
};

Game.prototype.fall = function(f) {
  if (f) {
    this.figure.fallInterval = 20;
    this.falling = true;
  } else {
    this.figure.fallInterval = this.speeds[this.level];
    this.falling = false;
  }
};

Game.prototype.changeFigureSet = function() {
  this.figureSetIndex = (this.figureSetIndex >= this.FIGURES.length - 1) ? 0 : this.figureSetIndex + 1;
  this.figureSet = this.FIGURES[this.figureSetIndex];
  this.menu.items.figureset.value = this.figureSet.name;
  this.nextFigure.randomize(this.figureSet.set);
  this.getNextFigure();
};

Game.prototype.update = function() {
  this.handleMouse();
  if (this.playing) {
    this.matrix.update(this.frameTime);
    if (this.justPlaced) {
      if (this.matrix.linesDown.length) {
        return;
      } else {
        this.getNextFigure();
        if (this.matrix.checkFull() || this.matrix.checkCollisions(this.figure)) { this.gameOver(); return; }
      }
    } else {
      var placeFigure = this.figure.update(this.frameTime, this.matrix);
      if (placeFigure) {
        this.justPlaced = true;
        this.matrix.placeFigure(this.figure);
        var lastLineCount = this.matrix.checkForLines();
        this.score += this.lineScores[lastLineCount];
        if (lastLineCount > 0) {
          for (var i = 1; i <= lastLineCount; i++) {
            this.lineCount++;
            if ((this.lineCount % this.levelStep == 0) && (this.level < this.speeds.length - 1)) {
              this.level++;
            }
          }
        }
      }
    }
  }
  //this.info['FPS:'] = (1 / this.frameTime).toFixed(0);
  this.info['Lines:'] = this.lineCount;
  this.info['Score:'] = this.score;
  this.info['Level:'] = this.level + 1;
};

Game.prototype.getNextFigure = function() {
  this.figure.replace(this.nextFigure, this.FIGURE_START_X, this.FIGURE_START_Y);
  this.figure.fallInterval = this.speeds[this.level];
  this.nextFigure.randomize(this.figureSet.set);
  this.justPlaced = false;
};

Game.prototype.render = function() {
  this.drawGameScreen();
  this.drawInfo();
  this.menu.draw(this.ctx);
  this.controls.draw(this.ctx);
  this.matrix.draw(this.ctx);
  if ((this.playing || this.paused) && !this.justPlaced) { this.figure.draw(this.ctx, this.matrix); }
  this.nextFigure.draw(this.ctx, this.nextMatrix);
  if (!this.playing) { this.dimMatrix(this.matrix); }
};

Game.prototype.getFrameTime = function() {
  var tNow = (new Date()).getTime();
  this.frameTime = (tNow - this.timeSinceLastFrame) / 1000;
  this.timeSinceLastFrame = tNow;
};

Game.prototype.localStorageScore = function(s) {
  if (window.localStorage) {
    if (s !== undefined) {
      if ((!(localStorage.score) || (localStorage.score < s)) && (s != -1)) {
        localStorage.score = s;
      } else if (s == -1) {
        delete localStorage.score;
      }
    }
    this.info['Best Score:'] = (localStorage.score) ? localStorage.score : 0;
  }
};

//---------------- Draw -------------------//

Game.prototype.drawGameScreen = function() {
  this.ctx.fillStyle = "#E5E5E5";
  this.ctx.fillRect(0, 0, this.WIDTH_PX, this.HEIGHT_PX);
  this.ctx.strokeStyle="#BEBEBE";
  this.ctx.lineWidth = 3;
  var x = this.MATRIX_LEFT_PX; var y = this.MATRIX_TOP_PX;
  var w = this.MATRIX_WIDTH * this.BLOCK_WIDTH_PX; var h = this.MATRIX_HEIGHT * this.BLOCK_HEIGHT_PX;
  this.ctx.strokeRect(x, y, w, h);
  this.ctx.lineWidth = 1;
  //var x = this.NEXT_MATRIX_LEFT_PX; var y = this.NEXT_MATRIX_TOP_PX;
  //var w = this.NEXT_MATRIX_WIDTH * this.NEXT_BLOCK_WIDTH_PX; var h = this.NEXT_MATRIX_HEIGHT * this.NEXT_BLOCK_HEIGHT_PX;
  //this.ctx.strokeRect(x, y, w, h);
};

Game.prototype.drawInfo = function() {
  this.ctx.fillStyle = "#7D7D7D";
  var i = 0;
  for (var p in this.info) {
    this.ctx.fillText(p, this.INFO_LEFT_PX, ((20 * i) + this.INFO_TOP_PX));
    i++;
    this.ctx.fillText(this.info[p], this.INFO_LEFT_PX, ((20 * i) + this.INFO_TOP_PX));
    i++;
  }
};

Game.prototype.dimMatrix = function(m) {
  this.ctx.save();
  this.ctx.globalAlpha = 0.15;
  this.ctx.fillStyle = "#7D7D7D";
  this.ctx.fillRect(m.left, m.top, m.width, m.height);
  this.ctx.restore();
};

//----------- Init & Main Loop ------------//

Game.prototype.loop = function() {
  this.getFrameTime();
  this.update();
  this.render();
  window.requestAnimationFrame(function() { game.loop(); });
};

Game.prototype.initGame = function() {
  this.figure = new Figure(this.FIGURE_START_X, this.FIGURE_START_Y, this.speeds[this.level]);
  this.figure.randomize(this.figureSet.set);
  this.nextFigure = new Figure(this.NEXT_FIGURE_START_X, this.NEXT_FIGURE_START_Y);
  this.nextFigure.randomize(this.figureSet.set);
  this.matrix = new Matrix(this.MATRIX_WIDTH, this.MATRIX_HEIGHT, this.BLOCK_WIDTH_PX, this.BLOCK_HEIGHT_PX, this.MATRIX_LEFT_PX, this.MATRIX_TOP_PX);
  this.nextMatrix = new Matrix(this.NEXT_MATRIX_WIDTH, this.NEXT_MATRIX_HEIGHT, this.NEXT_BLOCK_WIDTH_PX, this.NEXT_BLOCK_HEIGHT_PX, this.NEXT_MATRIX_LEFT_PX, this.NEXT_MATRIX_TOP_PX);
  this.menu = new Menu(this.MENU_LEFT_PX, this.MENU_TOP_PX, this.MENU_WIDTH_PX, this.MENU_ITEM_HEIGHT_PX);
  this.menu.items.figureset.value = this.figureSet.name;
  this.controls = new Controls();
  this.localStorageScore();
  this.populateInitMatrix();
  this.loop();
};

Game.prototype.populateInitMatrix = function() {
  var i, j;
  for (i = 0; i < this.matrix.blocks.length; i++) {
    switch (i) {
      case 0:
      case 4:
        for (j = 2; j < 4; j++) { this.matrix.blocks[i][j] = 1; }
        break;
      case 1:
      case 2:
      case 3:
      case 8:
      case 10:
        this.matrix.blocks[i][1] = 1;
        this.matrix.blocks[i][4] = 1;
        break;
      case 7:
      case 9:
      case 11:
        for (j = 1; j < 5; j++) { this.matrix.blocks[i][j] = 1; }
        break;
    }
    this.matrix.blocks[3][3] = 1;
    this.matrix.blocks[4][4] = 1;
    this.matrix.blocks[9][4] = 0;
  }
};

Game.prototype.init = function() {
  this.canvas = document.getElementById('game');
  this.canvas.width = this.WIDTH_PX;
  this.canvas.height = this.HEIGHT_PX;
  //this.canvas.setAttribute('tabindex','0');
  this.ctx = this.canvas.getContext('2d');
  this.ctx.translate(0.5, 0.5);
  this.ctx.textAlign = 'center';
  this.ctx.textBaseline = 'middle';
  this.ctx.font = "16px qbfont";
  document.body.addEventListener("keydown", function(e) { game.handleKeyDown(e); }, true);
  document.body.addEventListener("keyup", function(e) { game.handleKeyUp(e); }, true);
  document.body.addEventListener("mousedown", function(e) { game.handleMouseDown(e); }, true);
  document.body.addEventListener("mouseup", function(e) { game.handleMouseUp(e); }, true);
  document.body.addEventListener("mousemove", function(e) { game.handleMouseMove(e); }, true);
  document.body.addEventListener("touchstart", function(e) { game.handleTouch(e, 'down'); }, false);
  document.body.addEventListener("touchmove", function(e) { game.handleTouch(e, 'move'); }, false);
  document.body.addEventListener("touchend", function(e) { game.handleTouch(e, 'up'); }, false);
  this.initGame();
};

//---------------- Menu ------------------//

function Menu(x, y, w, h) {
  this.items = {
    start: {
      text: 'Start',
      value: '',
      hover: false, active: false,
      x: 0, y: 0, w: 0, h: 0
    },
    figureset: {
      text: 'Figureset',
      value: 'Standard',
      hover: false, active: false,
      x: 0, y: 0, w: 0, h: 0
    },
    reset: {
      text: 'Reset Score',
      value: '',
      hover: false, active: false,
      x: 0, y: 0, w: 0, h: 0
    }
  };
  this.init(x, y, w, h);
}

Menu.prototype.init = function(x, y, w, h) {
  var i = 0;
  for (var p in this.items) {
    this.items[p].x = x;
    this.items[p].y = (h * i) + y;
    this.items[p].w = w;
    this.items[p].h = h;
    i++;
  }
};

Menu.prototype.draw = function(ctx) {
  var halfHeight = 0;
  var halfWidth = 0;
  //ctx.fillStyle = "#7D7D7D";
  //ctx.strokeStyle = "#BEBEBE";
  for (var p in this.items) {
    ctx.save();
    halfHeight = Math.round(this.items[p].h / 2);
    halfWidth = Math.round(this.items[p].w / 2);
    if (this.items[p].hover) { ctx.fillStyle = "#616161"; }
    var modifier = 0;
    if (this.items[p].active) { modifier = 1; }
    if (this.items[p].value) {
      ctx.save();
      ctx.fillText(this.items[p].text, this.items[p].x + modifier, Math.round(this.items[p].y * 0.90) + modifier);
      ctx.font = "11px qbfont";
      ctx.fillText(this.items[p].value, this.items[p].x + modifier, Math.round(this.items[p].y * 1.15) + modifier);
      ctx.restore();
    } else {
      ctx.fillText(this.items[p].text, this.items[p].x + modifier, this.items[p].y + modifier);
    }
    ctx.strokeRect(this.items[p].x - halfWidth, this.items[p].y - halfHeight, this.items[p].w, this.items[p].h);
    ctx.restore();
  }
};

Menu.prototype.check = function(x, y, mouseDown, hover) {
  if (mouseDown === undefined) mouseDown = false;
  if (hover === undefined) hover = true;
  var halfHeight = 0;
  var halfWidth = 0;
  var returnValue = null;
  for (var p in this.items) {
    halfHeight = Math.round(this.items[p].h / 2);
    halfWidth = Math.round(this.items[p].w / 2);
    if ((x > this.items[p].x - halfWidth) && (x < this.items[p].x + halfWidth) && (y > this.items[p].y - halfHeight) && (y < this.items[p].y + halfHeight)) {
      this.items[p].hover = (hover) ? true : false;
      this.items[p].active = (mouseDown) ? true : false;
      returnValue = p;
    } else {
      this.items[p].hover = false;
      this.items[p].active = false;
    }
  }
  return returnValue;
};

//-------------- Controls ----------------//

function Controls() {
  this.items = {
    rotate: {
      hover: false, active: false,
      x: 260, y: 410, w: 60, h: 60
    },
    left: {
      hover: false, active: false,
      x: 30, y: 390, w: 50, h: 50
    },
    right: {
      hover: false, active: false,
      x: 130, y: 390, w: 50, h: 50
    },
    down: {
      hover: false, active: false,
      x: 80, y: 450, w: 50, h: 50
    }
  }
}

Controls.prototype.draw = function(ctx) {
  //ctx.fillStyle = "#7D7D7D";
  //ctx.strokeStyle = "#BEBEBE";
  ctx.lineWidth = 3;
  var lineLength = 30;
  var radius = 20;
  for (var p in this.items) {
    ctx.save();
    if (this.items[p].hover) { ctx.strokeStyle = "#616161"; }
    if (this.items[p].active) { ctx.strokeStyle = "#616161"; }
    var x = this.items[p].x; var y = this.items[p].y;
    var w = this.items[p].w; var h = this.items[p].h;
    var cX = x + (w / 2); var cY = y + (h / 2);
    ctx.strokeRect(x, y, w, h);
    ctx.beginPath();
    if (p == 'rotate') {
      ctx.arc(cX, cY, radius, (345 * Math.PI / 180), (300 * Math.PI / 180));
    } else {
      var deg = 0;
      if (p == 'left') { deg = 45; cX -= 10; }
      else if (p == 'right') { deg = 225; cX += 10; }
      else if (p == 'down') { deg = 315; cY +=10; }
      deg = (deg * Math.PI / 180);
      dX = (Math.cos(deg + (Math.PI * 3 / 2)) * lineLength) + cX;
      dY = (Math.sin(deg + (Math.PI * 3 / 2)) * lineLength) + cY;
      ctx.moveTo(dX, dY);
      ctx.lineTo(cX, cY);
      var dX = (Math.cos(deg) * lineLength) + cX;
      var dY = (Math.sin(deg) * lineLength) + cY;
      ctx.lineTo(dX, dY);
    }
    ctx.stroke();
    ctx.restore();
  }
};

Controls.prototype.check = function(x, y, mouseDown, hover) {
  if (mouseDown === undefined) mouseDown = false;
  if (hover === undefined) hover = true;
  var returnValue = null;
  for (var p in this.items) {
    if ((x > this.items[p].x) && (x < this.items[p].x + this.items[p].w) && (y > this.items[p].y) && (y < this.items[p].y + this.items[p].h)) {
      this.items[p].hover = (hover) ? true : false;
      this.items[p].active = (mouseDown) ? true : false;
      returnValue = p;
    } else {
      this.items[p].hover = false;
      this.items[p].active = false;
    }
  }
  return returnValue;
};

Controls.prototype.deactivateAll = function() {
  for (var p in this.items) {
    this.items[p].active = false;
  }
};

//--------------- Figure -----------------//

function Figure(x, y, t, r) {
  if (r === undefined) r = 0;
  if (t === undefined) t = 1000;
  this.fallInterval = t;
  this.rotationState = r;
  this.x = x;
  this.y = y;
  this.reset();
  this.blocks = [];
}

Figure.prototype.reset = function() {
  this.fallTimer = 0;
  this.isDown = false;
  this.isLeft = false;
  this.isRight = false;
  this.isRotate = false;
};

Figure.prototype.replace = function(f, x, y) {
  this.blocks = f.blocks.slice(0);
  this.x = x;
  this.y = y;
  this.rotationState = f.rotationState;
  this.reset();
};

Figure.prototype.update = function(fTime, m) {
  this.fallTimer += (fTime * 1000);
  if (this.fallTimer >= this.fallInterval) {
    this.fallTimer = 0;
    this.isDown = true;
  }
  return this.check(m);
};

Figure.prototype.check = function(m) {
  var placeFigure = false;
  if (this.isRotate) {
    this.rotate();
    if (m.checkCollisions(this)) { this.rotate(false); }
    this.isRotate = false;
  } else if (this.isDown) {
    this.fall();
    if (m.checkCollisions(this)) { this.up();  placeFigure = true; }
    this.isDown = false;
  } else if (this.isLeft) {
    this.moveLeft();
    if (m.checkCollisions(this)) { this.moveRight(); }
    this.isLeft = false;
  } else if (this.isRight) {
    this.moveRight();
    if (m.checkCollisions(this)) { this.moveLeft(); }
    this.isRight = false;
  }
  return placeFigure;
};

Figure.prototype.draw = function(ctx, m) {
  var figureArray = this.get();
  var initX = m.left + (this.x * m.blockWidth);
  var initY = m.top + (this.y * m.blockHeight);
  ctx.save();
  ctx.beginPath();
  ctx.rect(m.left, m.top, m.width, m.height);
  ctx.clip();
  for (var i = 0; i < figureArray.length; i++) {
    for (var j = 0; j < figureArray[i].length; j++) {
      if (figureArray[i][j]) {
        var x = initX + (j * m.blockWidth);
        var y = initY + (i * m.blockHeight);
        m.drawBlock(ctx, x, y, m.blockWidth, m.blockHeight, true, true);
      }
    }
  }
  ctx.restore();
};

Figure.prototype.randomize = function(figures) {
  var i = getRandomInt(0, figures.length - 1);
  this.blocks = figures[i];
};

Figure.prototype.rotate = function(clockwise) {
  if (clockwise === undefined) clockwise = true;
  if (clockwise) {
    if (this.rotationState < this.blocks.length - 1) {
      this.rotationState++;
    } else {
      this.rotationState = 0;
    }
  } else {
    if (this.rotationState == 0) {
      this.rotationState = this.blocks.length - 1;
    } else {
      this.rotationState--;
    }
  }
};

Figure.prototype.fall = function() { this.y++; };
Figure.prototype.up = function() { this.y--; };
Figure.prototype.moveLeft = function() { this.x--; };
Figure.prototype.moveRight = function() { this.x++; };
Figure.prototype.get = function() { return this.blocks[this.rotationState]; };

//---------------- Matrix -----------------//

function Matrix(w, h, bWPx, bHPx, mLPx, mTPx) {
  this.left = mLPx;
  this.top = mTPx;
  this.blockWidth = bWPx;
  this.blockHeight = bHPx;
  this.widthInBlocks = w;
  this.heightInBlocks = h;
  this.width = this.blockWidth * this.widthInBlocks;
  this.height = this.blockHeight * this.heightInBlocks;
  this.lineDownInterval = 100;
  this.lineDownTimer = 0;
  this.linesDown = [];
  this.blocks = [];
  this.reset();
}

Matrix.prototype.reset = function() {
  for (var i = 0; i < this.heightInBlocks; i++) {
    this.blocks[i] = [];
    for (var j = 0; j < this.widthInBlocks; j++) {
      this.blocks[i][j] = 0;
    }
  }
};

Matrix.prototype.update = function(fTime) {
  if (this.linesDown.length) {
    this.lineDownTimer += (fTime * 1000);
    if (this.lineDownTimer >= this.lineDownInterval) {
      this.lineDownTimer = 0;
      this.lineDown(this.linesDown.pop());
    }
  }
};

Matrix.prototype.checkCollisions = function(f) {
  var figureArray = f.get();
  for (var i = 0; i < figureArray.length; i++) {
    for (var j = 0; j < figureArray[i].length; j++) {
      var mX = f.x + j;
      var mY = f.y + i;
      if ((figureArray[i][j]) && (((mY) > this.heightInBlocks - 1) || ((mX) < 0) || ((mX) > this.widthInBlocks - 1))) {
        return true;
      } else if (((mY >= 0) && (mX >= 0)) && (figureArray[i][j]) && (this.blocks[mY][mX])) {
        return true;
      }
    }
  }
};

Matrix.prototype.checkFull = function() {
  for (var i = 0; i < this.blocks[0].length; i++) {
    if (this.blocks[0][i]) { return true; }
  }
};

Matrix.prototype.checkForLines = function() {
  lineCount = 0;
  for (var i = 0; i < this.blocks.length; i++) {
    var blockCount = 0;
    for (var j = 0; j < this.blocks[i].length; j++) {
      if (this.blocks[i][j]) {
        blockCount++;
      }
    }
    if (blockCount == this.widthInBlocks) {
      lineCount++;
      this.linesDown.push(i);
    }
  }
  if (this.linesDown.length) {
    this.lineDown(this.linesDown.pop());
  }
  return lineCount;
};

Matrix.prototype.placeFigure = function(f) {
  var figureArray = f.get();
  for (var i = 0; i < figureArray.length; i++) {
    for (var j = 0; j < figureArray[i].length; j++) {
      var mX = f.x + j;
      var mY = f.y + i;
      if (((mY >= 0) && (mX >= 0)) && (figureArray[i][j])) {
        this.blocks[mY][mX] = 1;
      }
    }
  }
};

Matrix.prototype.lineDown = function(index) {
  var zArray = [];
  for (var i = 0; i < this.widthInBlocks; i++) { zArray.push(0); }
  this.blocks.splice(index, 1);
  this.blocks.unshift(zArray);
  for (var i = 0; i < this.linesDown.length; i++) { this.linesDown[i]++; }
};

Matrix.prototype.draw = function(ctx) {
  //ctx.fillStyle = (playing) ? "#FFFFFF" : "#E5E5E5";
  ctx.clearRect(this.left, this.top, this.width, this.height);
  for (var i = 0; i < this.blocks.length; i++) {
    for (var j = 0; j < this.blocks[i].length; j++) {
      var x = this.left + (j * this.blockWidth);
      var y = this.top + (i * this.blockHeight);
      this.drawBlock(ctx, x, y, this.blockWidth, this.blockHeight, false,  this.blocks[i][j]);
    }
  }
};

Matrix.prototype.drawBlock = function(ctx, x, y, w, h, falling, active) {
  var doStroke = true;
  var borderWidth = Math.round(w / 6);
  var lineWidth = Math.round(w / 7);
  ctx.fillStyle = "#7D7D7D";
  ctx.strokeStyle = "#7D7D7D";
  ctx.lineWidth = lineWidth;
  if (falling) {
    ctx.fillStyle = "#A0A0A0";
  }
  if (!active) {
    doStroke = false;
    ctx.fillStyle = "#F0F0F0";
    borderWidth = Math.round(w / 10);
  }
  var halfBWidth = (borderWidth / 2);
  if (doStroke) {
    var sX = x + halfBWidth; var sY = y + halfBWidth;
    var sW = w - borderWidth; var sH = h - borderWidth;
    ctx.strokeRect(sX, sY, sW, sH);
  }
  var fX = x + halfBWidth + borderWidth; var fY = y + halfBWidth + borderWidth;
  var fW = w - (3 * borderWidth); var fH = h - (3 * borderWidth);
  ctx.fillRect(fX, fY, fW, fH);
};

//----------------- Lib -------------------//

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMouseCoordinates(element, event) {
  var r = element.getBoundingClientRect();
  return {
    x: event.clientX - r.left,
    y: event.clientY - r.top
  };
}

//http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {window.setTimeout(callback, 1000 / 60);};

//---------------- Init -------------------//

var game = new Game();
game.init();