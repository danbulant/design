<script>
    import { DateTime } from "luxon";

    export var value;
    var dt = DateTime.fromISO(value);
    $: dt = DateTime.fromISO(value);
</script>

<time datetime={dt.toISOWeekDate()} title={dt.toRelative()}>{dt.toLocaleString()}</time>