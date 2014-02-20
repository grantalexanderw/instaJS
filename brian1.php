<?php
   class event {
       public $title = "";
       public $start  = "";
       public $end = "";
   }
   $e = new event();
   $e->name = "Hanging out with Dhanuk";
   $e->start = "Fri, 21 Feb 2014 17:00:00 PST"
   $e->end = "Fri, 21 Feb 2014 18:30:00 PST"

   echo json_encode($e);

   $p = new event();
   $p->name = "Suite bonfire";
   $p->start = "Sun, 23 Feb 2014 19:00:00 PST"
   $p->end = "Mon, 24 Feb 2014 01:30:00 PST"

   echo json_encode($p);

   $f = new event();
   $f->name = "Hearthstone club meeting";
   $f->start = "Thur, 27 Feb 2014 17:00:00 PST"
   $f->end = "Thur, 27 Feb 2014 18:30:00 PST"

   echo json_encode($e);

   $b = new event();
   $b->name = "Cogs group goes clubbing";
   $b->start = "Fri, 28 Feb 2014 18:00:00 PST"
   $b->end = "Sat, 29 Feb 2014 02:30:00 PST"

   echo json_encode($e);
?>