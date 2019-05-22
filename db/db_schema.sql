CREATE TABLE IF NOT EXISTS users {
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50),
    user_password VARCHAR(50)
};


CREATE TABLE IF NOT EXISTS journalEntries {
    id SERIAL PRIMARY KEY NOT NULL,
    journal_entry TEXT,
    journal_date DATE,
    user_id INTEGER REFERENCES users(id) 
}

CREATE TABLE IF NOT EXISTS moods {
    id SERIAL PRIMARY KEY NOT NULL,
    mood VARCHAR(50),
    mood_date DATE,
    user_id INTEGER REFERENCES users(id)
}

CREATE TABLE IF NOT EXISTS toDoTasks {
    id SERIAL PRIMARY KEY NOT NULL,
    task TEXT,
    task_description TEXT,
    task_state VARCHAR(50),
    user_id INTEGER REFERENCES users(id)
}