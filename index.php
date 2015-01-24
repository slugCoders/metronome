<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Metronome</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--<link rel="icon" type="image/png" href="">-->
        
        <!--<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"> -->    
        <!-- mixer css --> 
        <!--<link rel="stylesheet" href="assets/css/metronome.css">-->
        
    </head>
    <body> 
        <div class="container">
            <h1>Metronome</h1>
            <hr />
            <div class="page">
                <form class="metronomeApp">
                    <label>bpm/tempo:</label>
                    <input id ="tempo" type="number" name="quantity" min="40" max="200" value="120" />
                     <input id="play" type="button" value="Play" />
                     <input type="button" value="Stop" />
                </form>
                <!--<div>
                    <div> 
                        <canvas data-processing-sources="assets/pde/pendulum.pde"></canvas>
                        <canvas id="number1" data-processing-sources="pde/number.pde"></canvas>
                    </div>
                    <div class="mixerDesk">
                        <ul class="mixerTracks">

                        </ul>
                    </div>  /mixerDesk 
                </div>-->
                
                
                
            </div>
        </div>
        

        <script data-main="js/app.js" src="js/lib/require.js"></script>
        <!--<script src="js/lib/jquery-1.11.1.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/processing.js/1.4.8/processing.min.js"></script>
        <script src="js/lib/underscore.js"></script>
        <script src="js/lib/backbone.js"></script>
        <script src="js/models/Manager.js"></script>
        <script src="js/views/View.js"></script>-->
    </body>
</html>


