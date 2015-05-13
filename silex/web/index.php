<?php

require_once __DIR__.'/../vendor/autoload.php'; 

$app = new Silex\Application(); 

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views',
));

$app->register(new Silex\Provider\MonologServiceProvider(), array(
    'monolog.logfile' => __DIR__.'/development.log',
));

$app['monolog']->addDebug('Testing the Monolog logging.');

$app->get('/', function() use($app) { 
    return $app['twig']->render('home.twig', array(
        'message' => 'Hello word',
    ));
}); 

$app->get('/bonjour', function() use($app) { 
    return 'Bonjour Nicolas'; 
}); 

$app->get('/hello/{name}', function ($name) use ($app) {
    return $app['twig']->render('index.twig', array(
        'name' => $name,
    ));
});

$app->run();
