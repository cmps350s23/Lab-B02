// <!-- 1. List of teams design -->
<>
    <div className={styles.teamList} id="team-cards">
        {/* populate each team here */}
    </div>


    {/* 2. Team card design */}
    <>
        <div className={styles.teamCard} id={team.id}>
            {/* {JSON.stringify(players)} */}
            <div className={styles.cardImage}>
                <img src={ }
                    alt="Player " />
            </div>

            <div className={styles.teamDescription}>
                <div className={styles.cardBody}>
                    <h2>TEAM NAME</h2>
                    <h4><span>City : </span></h4>
                    <h4><span> Established: </span></h4>
                </div>
                <div className={styles.actionBtns}>
                    <button className={styles.btnDelete}
                        onClick={ }>

                        <i className="fas fa-trash"> Delete </i>
                    </button>

                </div>
            </div>
        </div >
        {/* ADD THE PLAYERS LIST COMPONENT HERE AND PASS TO IT THE PLAYERS */}
    </>

    {/* 3. List of player design  */}

    <div className={styles.cardList} id="recipe-cards">
        {/* populate each player here */}
    </div>

    {/* 4. PlayerCard Design */}

    <div className={styles.playerCard} id={player.id}>
        <div className={styles.cardImage}>
            <img src={ }
                alt="London trip" />
        </div>
        <div className={styles.cardBody}>
            <hr className={styles.darkLine} />
            <h2>NAME</h2>
            <h4>NATIONALITY</h4>
        </div>

        <Link href={`/teams/${team.id}/players`} className={styles.btnPrimary}>
            <i className="fas fa-book"> Update Player </i>
        </Link>
    </div >

    {/* 5. Design of the PlayerForm */}

    <>
        <h2>Update Player</h2>
        <form className={styles.form} >
            <div className={styles.formGroup}> <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>  <label htmlFor="picture">Picture:</label>
                <input type="url" id="picture" name="picture" required />

            </div>
            <div className={styles.formGroup}> <label htmlFor="position">Position:</label>
                <input type="text" id="position" name="position" required />

            </div>
            <div className={styles.formGroup}>  <label htmlFor="nationality">Nationality:</label>
                <input type="text" id="nationality" name="nationality" required />
            </div>
            <div className={styles.formGroup}><label htmlFor="teamId">Team ID:</label>
                <input type="number" id="teamId" name="teamId" defaultValue={params.teamId} required readOnly />
            </div>
            <div className={styles.formGroup}>
                <div></div>
                <input className={styles.btnSubmit} type="submit" value="Update Player" />
            </div>
        </form>
    </>
</>