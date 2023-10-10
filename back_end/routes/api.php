<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BitacoraController;
use App\Http\Controllers\EnlaceController;
use App\Http\Controllers\PaginaController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [UsuarioController::class, 'login']);
Route::post('register', [UsuarioController::class, 'register']);

Route::put('/usuarios/idpersona', [UsuarioController::class, 'asignarIdPersona']);

Route::resource('usuarios', UsuarioController::class)->except(['create', 'edit']);
Route::resource('roles', RoleController::class)->except(['create', 'edit']);
Route::resource('enlaces', EnlaceController::class)->except(['create', 'edit']);
Route::resource('bitacoras', BitacoraController::class)->except(['create', 'edit']);
Route::resource('personas', PersonaController::class)->except(['create', 'edit']);
Route::resource('paginas', PaginaController::class)->except(['create', 'edit']);

Route::delete('/usuarios/{id}', [UsuarioController::class, 'destroy']);
