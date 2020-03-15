<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Profile extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public $dat;

    public function __construct($tits, $sher)
    {
        //
        // dd($tits);
        $this->dat = $tits.$sher;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.profile');
    }

    public function list($string){
        return [
            // "Garima",
            // "is",
            // "Awesome",
        ];
    }
}
