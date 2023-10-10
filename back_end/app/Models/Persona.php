<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    use HasFactory;

    protected $table = 'personas';

    protected $primaryKey = 'idpersona';

    protected $fillable = [
        'primero_nome',
        'segundo_nome',
        'primero_sobrenome',
        'segundo_sobrenome',
        'user'

    ];


    public function usuarios()
    {
        return $this->hasMany(Usuario::class, 'idpersona');
    }
}