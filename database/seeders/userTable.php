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
            'nickname' => 'Reksho Satriyo',
            'email' => 'rekso@gmail.com',
            'password' => app('hash')->make('rekso123'),
            'commonname' => 'Reksho',
        ]);
    }
}
