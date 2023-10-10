<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    use HasFactory;

    protected $table = 'rols';

    protected $primaryKey = 'idrol';

    protected $fillable = [

        'rol',
        'datacriado',
        'datamodificacado',
        'usuariocriado',
        'usuariomodificado',
    ];


    public function usuarios()
    {
        return $this->hasMany(Usuario::class, 'idrol');
    }

    public function paginas()
    {
        return $this->belongsToMany(Pagina::class, 'enlaces', 'idrol', 'idpagina');
    }
}
