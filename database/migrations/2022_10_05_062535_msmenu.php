<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Msmenu extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('msmenu', function (Blueprint $table) {
            $table->id('idMenu');
            $table->integer('idCategory');
            $table->string('name');
            $table->text('description');
            $table->decimal('price');
            $table->integer('ratingcount');
            $table->integer('ratingsum');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('msmenu');
    }
}
