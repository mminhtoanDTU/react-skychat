import React from 'react';
import './popavatar.scss';
import PopItem from './PopItem';
import Bear from '../../../../assets/images/bear.png';
import Bee from '../../../../assets/images/bee.png';
import Bird from '../../../../assets/images/bird.png';
import Deer from '../../../../assets/images/deer.png';
import Fox from '../../../../assets/images/fox.png';
import Monkey from '../../../../assets/images/monkey.png';
import Owl from '../../../../assets/images/owl.png';
import Panda from '../../../../assets/images/panda.png';
import Reindeer from '../../../../assets/images/reindeer.png';

const ListAvatar = [Bear, Bee, Bird, Deer, Fox, Monkey, Owl, Panda, Reindeer];

function PopAvatar(props) {
    return (
        <ul className="pop-avatar">
            {ListAvatar.map(item => (
                <PopItem
                    key={item}
                    imageUrl={item}
                />
            ))}
        </ul>
    );
}

export default PopAvatar;