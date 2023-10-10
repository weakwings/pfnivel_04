<?php

namespace Database\Seeders;

use App\Models\Pagina;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaginaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        //Admin Pages

        Pagina::create([
            'url' => '/admindashboard',
            'estado' => 'activo',
            'nome' => 'admindashboard',
            'icone' => 'dashboard',
            'tipo' => 'admin'
        ]);

        Pagina::create([
            'url' => '/admin/Parameters',
            'estado' => 'activo',
            'nome' => 'Parameters',
            'icone' => 'Parameters',
            'tipo' => 'admin'
        ]);

        Pagina::create([
            'url' => '/admin/roles',
            'estado' => 'activo',
            'nome' => 'Roles',
            'icone' => 'roles',
            'tipo' => 'admin'
        ]);

        Pagina::create([
            'url' => '/admin/usuarios',
            'estado' => 'activo',
            'nome' => 'Usuarios',
            'icone' => 'usuarios',
            'tipo' => 'admin'
        ]);

        Pagina::create([
            'url' => '/admin/bitacoras',
            'estado' => 'activo',
            'nome' => 'Bitacoras',
            'icone' => 'bitacoras',
            'tipo' => 'admin'
        ]);

        Pagina::create([
            'url' => '/admin/enlaces',
            'estado' => 'activo',
            'nome' => 'Enlaces',
            'icone' => 'link',
            'tipo' => 'admin'
        ]);

        //User Pages

        Pagina::create([
            'url' => '/userdashboard',
            'estado' => 'activo',
            'nome' => 'userdashboard',
            'icone' => 'dashboard',
            'tipo' => 'user'
        ]);

        Pagina::create([
            'url' => '/user/Colleagues',
            'estado' => 'activo',
            'nome' => 'Colleagues',
            'icone' => 'usuarios',
            'tipo' => 'user'
        ]);

        Pagina::create([
            'url' => '/user/enlaces',
            'estado' => 'activo',
            'nome' => 'Enlaces',
            'icone' => 'link',
            'tipo' => 'user'
        ]);

        Pagina::create([
            'url' => '/user/historial',
            'estado' => 'activo',
            'nome' => 'Historial',
            'icone' => 'bitacoras',
            'tipo' => 'user'
        ]);
    }
}
