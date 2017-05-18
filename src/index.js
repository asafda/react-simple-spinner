const styles = {
  overlay: {
    background: 'rgba(255,255,255, 0.6)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinner: {
    border: '6px solid rgba(0, 178, 45, 0.2)',
    borderRadius: '100%',
    animation: 'spinny 0.6s infinite linear 0.25s'
  }
};

class Spinny extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animationName: ''
        };

        Object.assign(styles.spinner, {
            height: props.diameter || '5vh',
            width: props.diameter || '5vh',
            borderWidth: props.thickness || '6px',
            borderColor: props.bgColor || 'rgba(0, 178, 45, 0.2)',
            borderTopColor: props.spinnerColor || 'rgba(0, 178, 45, 0.8)',
            animationDuration: props.duration || '.6s'
        })
    }

    componentDidMount() {
        const animationName = 'spinny';

        this.addAnimationKeyFrame(animationName);

        this.setState({ animationName });
    }

    addAnimationKeyFrame(animationName) {
        let styleSheet = document.styleSheets[0];

        let keyframes =
            `@keyframes ${animationName} {
                0% {transform:rotate(0deg)}
                100% {transform:rotate(359deg)}
            }`;

        if (!styleSheet) {
            var style = document.createElement('style');
            style.append(document.createTextNode(''));
            document.head.appendChild(style);
            styleSheet = document.styleSheets[0];
        }

        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }

    render() {
        Object.assign(styles.spinner, {animationName: this.state.animationName});

        return (
            <div style={styles.overlay}>
                <div style={styles.spinner}></div>
            </div>
        )
    }
}

export default Spinny;
