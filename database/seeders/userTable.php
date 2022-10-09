<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class userTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('msuser')->insert([
            'nickname' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => app('hash')->make('password'),
            'commonname' => 'Admin',
        ]);
    }
}
