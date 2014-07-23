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
                
                <div>
                    <div>
                        <canvas data-processing-sources="assets/pde/pendulum.pde"></canvas>
                        <!--<canvas id="number1" data-processing-sources="pde/number.pde"></canvas>-->
                    </div>
                    <div class="mixerDesk">
                        <ul class="mixerTracks">

                        </ul>
                    </div> <!-- /mixerDesk -->
                </div>
                
                
                
            </div>
        </div>
        

        
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/processing.js/1.4.8/processing.min.js"></script>

        
    </body>
</html>


