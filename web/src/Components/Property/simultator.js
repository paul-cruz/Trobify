import React, { useState } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Slider, Typography, Paper } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

export default function PropertySimulator({ propertyCost }) {
    const classes = useStyles();
    const [duration, setDuration] = useState(5);
    const [cost, setCost] = useState(100000);
    const [total, setTotal] = useState(getTotal());

    function handleCahnge(label, value) {
        if (label === "duration") setDuration(value);
        if (label === "cost") setCost(value);
        setTotal(getTotal());
    }

    function getTotal() {
        const i = 1 + (0.0075);
        const months = duration * 12;
        const aux = Math.pow(i, months);
        return (cost * ((aux * 0.0075) / (aux - 1))) * months;
    }

    function valueLabelFormat(value) {
        if (value >= 1000000)
            return `${Math.round((value / 1000000) * 100) / 100} M`;
        else if (value >= 100000)
            return `${Math.round((value / 100000) * 100) / 100} K`;
        else return value;
    }

    return (
        <Paper className={classes.paper}>
            <Typography variant="h4">
                <FormattedMessage
                    id="app.property.simulator.label"
                    defaultMessage="Sell Price"
                />
            </Typography>
            <Typography gutterBottom>
                <strong>
                    <FormattedMessage
                        id="app.property.simulator.price-label"
                        defaultMessage="Sell Price"
                    />$
                    <FormattedNumber
                        value={propertyCost}
                        style="currency"
                        currencyDisplay="symbol"
                        currency="MXN"
                    />
                </strong></Typography>
            <div>
                <FormattedMessage
                    id="app.property.simulator.cost-label"
                    defaultMessage="Credit total"
                />$
                <FormattedNumber
                    value={cost}
                    style="currency"
                    currencyDisplay="symbol"
                    currency="MXN"
                />
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider"
                    name="cost"
                    defaultValue={100000}
                    min={propertyCost * 0.25}
                    max={propertyCost * 0.8}
                    valueLabelFormat={valueLabelFormat}
                    value={cost}
                    onChange={(e, value) => handleCahnge("cost", value)}
                />
            </div>
            <div>
                <FormattedMessage
                    id="app.property.simulator.duration-label"
                    defaultMessage="Credit duration"
                />{`${duration} Años`}
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider"
                    name="duration"
                    defaultValue={5}
                    step={5}
                    marks
                    min={5}
                    max={20}
                    value={duration}
                    onChange={(e, value) => handleCahnge("duration", value)}
                />
            </div>
            <div className={classes.margin} />
            <div>
                <FormattedMessage
                    id="app.property.simulator.total-label"
                    defaultMessage="Total to pay"
                />$
                <FormattedNumber
                    value={total}
                    style="currency"
                    currencyDisplay="symbol"
                    currency="MXN"
                />
            </div>
            <div>
                <FormattedMessage
                    id="app.property.simulator.month-label"
                    defaultMessage="Credit months"
                />{duration * 12}
            </div>
            <div>
                <FormattedMessage
                    id="app.property.simulator.interest-label"
                    defaultMessage="Generated iterests"
                />$
                <FormattedNumber
                    value={total - cost}
                    style="currency"
                    currencyDisplay="symbol"
                    currency="MXN"
                />
            </div>
        </Paper>
    );
}