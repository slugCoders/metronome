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
        
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">     
        <!-- mixer css --> 
        <link rel="stylesheet" href="assets/css/metronome.css">
        
    </head>
    <body> 
        <div class="container">
            <h1>Metronome</h1>
            <hr />
            <div class="page">
                <form>
                    <label>bpm/tempo:</label>
                    <input type="number" name="quantity" min="40" max="200" value="120" />
                     <input type="button" value="Play" />
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
        

        
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/processing.js/1.4.8/processing.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js"></script>
        
    </body>
</html>


