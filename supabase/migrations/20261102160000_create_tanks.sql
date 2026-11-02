-- Saved tanks for a signed-in user.
-- Run this in the Supabase SQL editor (or the Supabase CLI) on a free project.
-- Email codes are turned on in Authentication, not in this file.
-- Do not enable phone or SMS sign-in.

create table public.tanks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  name text not null,
  species text[] not null,
  gallons integer,
  updated_at timestamptz not null default now(),
  constraint tanks_name_len check (char_length(name) between 1 and 60),
  constraint tanks_species_len check (cardinality(species) between 1 and 6),
  constraint tanks_gallons_range check (gallons is null or (gallons > 0 and gallons <= 500))
);

create index tanks_user_updated_idx on public.tanks (user_id, updated_at desc);

alter table public.tanks enable row level security;

create or replace function public.tanks_set_owner()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'Sign in is required.';
  end if;
  new.user_id := auth.uid();
  new.updated_at := now();
  return new;
end;
$$;

create trigger tanks_set_owner
before insert or update on public.tanks
for each row
execute function public.tanks_set_owner();

create policy tanks_select_own
on public.tanks
for select
to authenticated
using (auth.uid() = user_id);

create policy tanks_insert_own
on public.tanks
for insert
to authenticated
with check (auth.uid() = user_id);

create policy tanks_update_own
on public.tanks
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy tanks_delete_own
on public.tanks
for delete
to authenticated
using (auth.uid() = user_id);

grant select, insert, update, delete on table public.tanks to authenticated;
revoke all on table public.tanks from anon;
