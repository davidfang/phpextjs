<?php
/**
 *
 * @author Sani Iman Pribadi
 *
 */
// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');
// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
    return array(
        'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
        'name' => 'David Web Application',
        // preloading 'log' component
        'preload' => array('log'),
        // autoloading model and component classes
        'import' => array(
            'application.models.*',
            'application.components.*',
        ),
        'modules' => array(
            'admin',
            // uncomment the following to enable the Gii tool

            'gii' => array(
                'class' => 'system.gii.GiiModule',
                'password' => '123456',
                // If removed, Gii defaults to localhost only. Edit carefully to taste.
                'ipFilters' => array('127.0.0.1', '::1'),
                'generatorPaths' => array(
                    //'bootstrap.gii',
                    //'ext.giix-core', // giix generators
                    'ext.phpextjs'
                ),
            ),
        ),
        // application components
        'components' => array(
            'user' => array(
                // enable cookie-based authentication
                'allowAutoLogin' => true,
                'class' => 'WebUser',
            ),
            // uncomment the following to enable URLs in path-format
            'urlManager' => array(
                'urlFormat' => 'path',
                'showScriptName' => false,
                'rules' => array(
                    'gii/<controller:\w+>/<action:\w+>' => 'gii/<controller>/<action>',
                    'admin' => 'admin/default/index',
                    'admin/<controller:\w+>/<action:\w+>' => 'admin/<controller>/<action>',
                    '<controller:\w+>/<id:\d+>' => '<controller>/view',
                    '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
                    '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
                ),
            ),
            /**'db' => array(
                'connectionString' => 'sqlite:' . dirname(__FILE__) . '/../data/testdrive.db',
            ),**/
            'db' => array(
                'connectionString' => 'mysql:host=localhost;dbname=phpextjs_stndart',
                'emulatePrepare' => true,
                'username' => 'root',
                'password' => '123456',
                'charset' => 'utf8',
                'class' => 'CDbConnection'
            ),
            // uncomment the following to use a MySQL database
            /*
              'db'=>array(
              'connectionString' => 'mysql:host=localhost;dbname=testdrive',
              'emulatePrepare' => true,
              'username' => 'root',
              'password' => '',
              'charset' => 'utf8',
              ),
             */
            'errorHandler' => array(
                // use 'site/error' action to display errors
                'errorAction' => 'site/error',
            ),
            'log' => array(
                'class' => 'CLogRouter',
                'routes' => array(
                    array(
                        'class' => 'CFileLogRoute',
                        'levels' => 'error, warning',
                    ),
                // uncomment the following to show log messages on web pages
                /*
                  array(
                  'class'=>'CWebLogRoute',
                  ),
                 */
                ),
            ),
        ),
        // application-level parameters that can be accessed
        // using Yii::app()->params['paramName']
        'params' => array(
            // this is used in contact page
            'adminEmail' => 'webmaster@example.com',
        ),
    );
    