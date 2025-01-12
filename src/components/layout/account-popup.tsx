import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './layout.module.css';

type TAccountPopupProps = {
    is_open: boolean;
    onRequestClose: () => void;
    currency?: Record<'Demo' | 'Real', number>;
    accounts?: Record<'Demo' | 'Real' | 'icon', string>;
};

const account_content = ['Demo', 'Real'];

const AccountPopup = ({ is_open, onRequestClose, accounts, currency }: TAccountPopupProps) => {
    const [account_type, setAccountType] = useState('Demo');
    return (
        <Modal
            isOpen={is_open}
            onRequestClose={onRequestClose}
            contentLabel='Modal'
            className={{
                base: styles.modalBase,
                afterOpen: styles.modalBaseAfterOpen,
                beforeClose: styles.modalBaseBeforeClose,
            }}
            overlayClassName={{
                base: styles.overlayBase,
                afterOpen: styles.overlayBaseAfterOpen,
                beforeClose: styles.overlayBaseBeforeClose,
            }}
            shouldCloseOnOverlayClick={true}
            closeTimeoutMS={1000}
        >
            <div>
                <div className={styles.accountTypes}>
                    {account_content.map(account => (
                        <div
                            key={account}
                            onClick={() => setAccountType(account)}
                            className={styles.accountType}
                            style={{
                                borderBottom: `${account_type === account ? '2px solid red' : '2px solid grey'}`,
                                fontWeight: `${account_type === account ? 'bold' : 'normal'}`,
                            }}
                        >
                            {account}
                        </div>
                    ))}
                </div>
                <div className={styles.accountList}>
                    Deriv Account:
                    <div className={styles.currency}>
                        <div>
                            <div className={styles.currencyBold}>{account_type}</div>
                            <div className={styles.currencySmall}>
                                {accounts?.[account_type as 'Demo' | 'Real' | 'icon']}
                            </div>
                        </div>
                        <div className={styles.currencyBold}>{currency?.[account_type as 'Demo' | 'Real']} USD</div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AccountPopup;
