<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Msuser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('msuser', function (Blueprint $table) {
            $table->id('idUser');
            $table->string('nickname', '100');
            $table->string('email', '100');
            $table->string('password');
            $table->string('commonname', '120');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('msuser');
    }
}
