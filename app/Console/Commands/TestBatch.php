<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class TestBatch extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     * artisanコマンドで呼ぶときの名称
     */
    protected $signature = 'batch:test';

    /**
     * The console command description.
     *
     * @var string
     * コマンドの説明 php artisan listで確認できる
     */
    protected $description = 'お試しのバッチ処理';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return string
     * php artisan batch:test(上記で設定したコマンド)
     * を実行すると動く
     */
    public function handle()
    {
        $test = 'testです';
        echo $test;
    }
}
