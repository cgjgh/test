import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => (
        <div>
            <input />
            <button>Button</button>
        </div>
    ),
    environmentProps: {
        canvasHeight: 565,
    },
});
